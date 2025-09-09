export const writeups = [
	{
		id: 1,
		slug: 'web-shell-upload-obfuscated-file-extension',
		title: "Web shell upload via obfuscated file extentiony First Writeup",
		date: "2025-04-22",
		summary:
			"Bypassed file upload filter using null byte (%00) to upload a PHP web shell, causing Remote Code Execution (RCE) due to weak server-side validation.",
		url: "/writeups/web-shell-upload-obfuscated-file-extension",
		file: "writeup-20250422.md",
	},
	{
		slug: 'web-cache-poisoning-multiple-headers',
		id: 2,
		title: " Web Cache Poisoning with multiple headers",
		date: "2025-04-25",
		summary:
			"Web cache poisoning via X-Forwarded headers enables injecting malicious scripts by poisoning cached responses, risking credential theft and session hijacking.",
		url: "/writeups/web-cache-poisoning-multiple-headers",
		file: "writeup-20250425.md",
	},
	{
		slug: 'targeted-web-cache-poisoning-unknown-header',
		id: 3,
		title: "Targeted web cache poisoning using an unknown header",
		date: "2025-04-26",
		summary:
			"Targeted web cache poisoning via unvalidated X-Host header enables delivering malicious JavaScript to specific users, risking session hijacking and data theft.",
		url: "/writeups/targeted-web-cache-poisoning-unknown-header",
		file: "writeup-20250426.md",
	},
	{
		slug: 'web-cache-poisoning-unkeyed-query-parameter',
		id: 4,
		title: "Web cache poisoning via an unkeyed query parameter",
		date: "2025-04-27",
		summary:
			"Web cache poisoning via unkeyed UTM query parameter allows injecting malicious JavaScript into cached pages, risking stored XSS attacks on users.",
		url: "/writeups/web-cache-poisoning-unkeyed-query-parameter",
		file: "writeup-20250427.md",
	},
	{
		slug: 'parameter-cloaking',
		id: 5,
		title: "Parameter Cloaking",
		date: "2025-04-29",
		summary:
			"Parameter cloaking with unkeyed UTM and ‘;’ separator enables cache poisoning, allowing attackers to inject scripts that execute on victim browsers.",
		url: "/writeups/parameter-cloaking",
		file: "writeup-20250429.md",
	},
	{
		slug: 'web-cache-poisoning-fat-get-request',
		id: 6,
		title: " Web cache poisoning via a fat GET request",
		date: "2025-04-30",
		summary:
			"Web cache poisoning via fat GET request with body allows script injection due to improper parameter parsing, enabling XSS and session hijacking risks.",
		url: "/writeups/web-cache-poisoning-fat-get-request",
		file: "writeup-20250430.md",
	},
	{
		slug: 'web-cache-poisoning-dom-vulnerability',
		id: 7,
		title:
			"Web cache poisoning to exploit a DOM vulnerability via a cache with strict cacheability criteria",
		date: "2025-05-10",
		summary:
			"Web cache poisoning exploits DOM vulnerability via poisoned geolocate.json, enabling script injection and cookie theft through unsafe content rendering.",
		url: "/writeups/web-cache-poisoning-dom-vulnerability",
		file: "writeup-20250510.md",
	},


]


