FROM nginx:alpine

COPY dist/laboratorio-pwa-ci/browser /usr/share/nginx/html

EXPOSE 80