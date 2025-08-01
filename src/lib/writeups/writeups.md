
# 🔧 Writeup: Implementasi Rate Limiting Middleware di FastAPI

**Tanggal**: 2025-08-01  
**Project**: Internal API Gateway  
**Stack**: FastAPI, Redis, Python 3.11  
**Tujuan**: Mencegah abuse endpoint dengan menerapkan rate limit per IP

---

## 🎯 Masalah

API kami diakses oleh klien eksternal dan internal. Tanpa rate limiting, abuse sangat mungkin terjadi, misalnya:

- Bot spam mengakses `/login` ribuan kali
- Client gagal mengatur retry dan menabrak server terus-menerus

Kami ingin membatasi:
- Max 100 request/menit per IP untuk endpoint tertentu

---

## 🧠 Solusi

Saya membuat custom middleware yang:

- Mengecek IP client dari header/request
- Menyimpan hit count di Redis (pakai TTL 60 detik)
- Mengembalikan HTTP 429 jika melebihi limit

---

## 💻 Kode Inti

```python
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse
import redis.asyncio as redis

r = redis.Redis(h
