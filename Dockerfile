FROM node:18-slim

COPY ./uBOLite /extensions/uBOLite
COPY ./chrome_linux_signing_key.pub /tmp/chrome_linux_signing_key.pub

RUN sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list.d/debian.sources \
    && apt-get update \
    && apt-get install -y wget gnupg \
    && cat /tmp/chrome_linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/googlechrome-linux-keyring.gpg \
    && sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/googlechrome-linux-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN PUPPETEER_SKIP_DOWNLOAD='true' npm install puppeteer@20.9.0 kafkajs@2.2.4 --registry=https://registry.npmmirror.com \
    && npm cache clean --force

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["google-chrome-stable"]