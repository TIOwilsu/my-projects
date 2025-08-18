# Use a minimal base image for a small final image
FROM golang:1.23.2 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the Go program into the container
COPY . .

# Build the Go application
# CGO_ENABLED=0 disables cgo, leading to a statically linked binary
# GOOS=linux ensures it's built for Linux
# -a -installsuffix cgo helps create a truly static binary
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o myapp .

# Use a scratch image for the final, smallest possible image
FROM scratch

# Copy the compiled binary from the builder stage
COPY --from=builder /app/myapp /myapp

# Set the entrypoint to run the compiled binary
ENTRYPOINT ["/myapp"]