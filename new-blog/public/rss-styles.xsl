<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>RSS &#183; <xsl:value-of select="/rss/channel/title"/></title>
        <link rel="shortcut icon" href="/favicon.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&amp;family=Inter:wght@400;500;600;700&amp;display=swap"/>
        <style>
          :root {
            --bg: #111927;
            --bg-elev: #1a2332;
            --bg-elev-2: #202c3f;
            --border: #2a3a55;
            --text: #c5d1eb;
            --text-muted: #8094b3;
            --heading: #ffffff;
            --accent: #9fef00;
            --accent-glow: rgba(159, 239, 0, 0.35);
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html, body {
            background: var(--bg);
            color: var(--text);
            font-family: var(--font-sans);
            -webkit-font-smoothing: antialiased;
            min-height: 100vh;
          }
          body {
            background-image:
              radial-gradient(circle at 15% 0%, rgba(159, 239, 0, 0.06), transparent 40%),
              radial-gradient(circle at 85% 100%, rgba(64, 128, 255, 0.05), transparent 40%);
            background-attachment: fixed;
          }
          .wrap { max-width: 768px; margin: 0 auto; padding: 60px 20px 80px; }
          .banner {
            background: var(--bg-elev);
            border: 1px solid var(--border);
            border-radius: 6px;
            padding: 18px 22px;
            margin-bottom: 28px;
            font-family: var(--font-mono);
            font-size: 13px;
            color: var(--text-muted);
            line-height: 1.6;
          }
          .banner .accent { color: var(--accent); }
          .banner code {
            font-family: var(--font-mono);
            background: var(--bg-elev-2);
            border: 1px solid var(--border);
            color: var(--accent);
            padding: 2px 7px;
            border-radius: 3px;
            font-size: 0.92em;
          }
          .header {
            margin-bottom: 30px;
            padding-bottom: 22px;
            border-bottom: 1px solid var(--border);
          }
          .header .label {
            font-family: var(--font-mono);
            font-size: 12px;
            color: var(--text-muted);
            letter-spacing: 0.05em;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
          .header .label .bracket { color: var(--accent); }
          .header h1 {
            color: var(--heading);
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.01em;
          }
          .header p {
            color: var(--text-muted);
            font-size: 14px;
            line-height: 1.55;
          }
          .meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: var(--font-mono);
            font-size: 12px;
            color: var(--text-muted);
            margin-bottom: 18px;
            letter-spacing: 0.04em;
          }
          .meta .count { color: var(--accent); }
          .item {
            display: block;
            background: var(--bg-elev);
            border: 1px solid var(--border);
            border-radius: 6px;
            padding: 18px 20px;
            margin-bottom: 14px;
            color: var(--text);
            text-decoration: none;
            transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
          }
          .item:hover {
            border-color: var(--accent);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          }
          .item .date {
            font-family: var(--font-mono);
            font-size: 11px;
            color: var(--accent);
            letter-spacing: 0.04em;
            margin-bottom: 6px;
          }
          .item .title {
            font-size: 17px;
            font-weight: 700;
            color: var(--heading);
            margin-bottom: 6px;
            line-height: 1.4;
          }
          .item .summary {
            font-size: 13px;
            color: var(--text-muted);
            line-height: 1.55;
            margin-bottom: 12px;
          }
          .cats {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
          }
          .cat {
            font-family: var(--font-mono);
            font-size: 10px;
            padding: 2px 7px;
            border-radius: 3px;
            background: rgba(159, 239, 0, 0.08);
            border: 1px solid rgba(159, 239, 0, 0.25);
            color: var(--accent);
            letter-spacing: 0.03em;
          }
          .home-link {
            display: inline-block;
            margin-top: 24px;
            font-family: var(--font-mono);
            font-size: 13px;
            color: var(--accent);
            text-decoration: none;
            border-bottom: 1px dashed var(--accent);
          }
          .home-link:hover { text-shadow: 0 0 8px var(--accent-glow); }
          @media (max-width: 768px) {
            .wrap { padding: 40px 16px 60px; }
            .header h1 { font-size: 22px; }
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="banner">
            <span class="accent">[rss]</span>
            this is a web feed, also known as an RSS feed. <strong>subscribe</strong> by copying the URL from the address bar into your RSS reader (e.g. <code>Feedly</code>, <code>Inoreader</code>, <code>NetNewsWire</code>).
          </div>
          <header class="header">
            <div class="label">
              <span class="bracket">[</span>feed::channel<span class="bracket">]</span>
            </div>
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p><xsl:value-of select="/rss/channel/description"/></p>
          </header>
          <div class="meta">
            <span>recent posts</span>
            <span class="count">
              <xsl:value-of select="count(/rss/channel/item)"/> entries
            </span>
          </div>
          <xsl:for-each select="/rss/channel/item">
            <a class="item">
              <xsl:attribute name="href">
                <xsl:value-of select="link"/>
              </xsl:attribute>
              <div class="date">
                <xsl:value-of select="substring(pubDate, 0, 17)"/>
              </div>
              <div class="title"><xsl:value-of select="title"/></div>
              <div class="summary"><xsl:value-of select="description"/></div>
              <div class="cats">
                <xsl:for-each select="category">
                  <span class="cat">#<xsl:value-of select="."/></span>
                </xsl:for-each>
              </div>
            </a>
          </xsl:for-each>
          <a class="home-link" href="/">&#x276E; back to blog</a>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
