#!/usr/bin/env python3
"""Static file server for local preview.

Sends no-cache headers so edits to HTML/CSS/JS/images always show up on
reload — no hard-refresh needed. Run with: python3 serve.py [port]
"""
import http.server
import socketserver
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4173


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"Serving on http://localhost:{PORT} (no-cache)")
        httpd.serve_forever()
