FROM golang:1.20.0 AS builder

WORKDIR /usr/src/app

COPY app.go .

# Inicia o módulo para o app.go
RUN go mod init app.go

# Cria o executável do app
RUN go build -o app

# Estágio responsável por colocar apenas o binário na imagem final
FROM scratch
COPY --from=builder /usr/src/app/app .
ENTRYPOINT ["./app"]
