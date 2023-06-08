# HAProxy - Local

This repo is intended to provide an easy way to configure an HAProxy instance to connect to our different environments for local development. It also configures the HAProxy UI so you can easily visualize the various connections to the services within the selected environment.

### Prerequisites

#### Docker

The following application must be installed:

- Docker Desktop: https://www.docker.com/products/docker-desktop/

#### Host file entries

Ensure your `hosts` file contains the following entries:

```
# zeta - New Domains
127.0.0.1	admin.local.zeta.com
127.0.0.1	api.local.zeta.com

```

For your apps to properly route using HAProxy, you will need to make sure your app's environment file is set up to point to the domains listed above. `localhost` will no longer route due to possible conflicts with service names across products (example: payments and insurance payments).

#### mkcert

You will be required to install a local certificate using the `mkcert` command line tool.

Ubuntu

```
sudo apt update && sudo apt upgrade
sudo apt install libnss3-tools -y
wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-linux-amd64
sudo cp mkcert-v1.4.4-linux-amd64 /usr/local/bin/mkcert
sudo chmod +x /usr/local/bin/mkcert
```

MacOS

```
brew install mkcert
brew install nss
mkcert -install
```

Run this command from this repo's root directory to generate the certificate:

```
mkcert -cert-file zeta-local.pem -key-file zeta-local.pem zeta.com '*.zeta.com' '*.local.zeta.com' localhost 127.0.0.1 ::1
chmod +r zeta-local.pem
```

### Launch

You can run one of the follow commands from the top level of the repo to start HAProxy:

`./env-start.sh` and `./env-start.sh dev`: Connect to the development environment (lambda instances)

`./env-start.sh stage`: Connect to the stage environment

`./env-start.sh prod`: Connect to the production environment

### Visualize

You can view to the HAProxy UI by visiting the following url after launching HAProxy:

http://localhost:81/haproxy

The HAProxy UI provides an eay way to visualize the connections to various services in the selected environment. In the image below you can see that the user is running HAProxy on the development environment and has two services started locally. One on a VM and one on their Host's OS. For this scenario traffic will be routed to the following places:

- `api-api` -> Dev lambda
- `api-` -> Host OS instance

![HAProxy UI](/haproxy.png)

The servers "localhost" and "alternate" can be pointed at different IPs on the same host. This is incredibly helpful for Windows users that run services in both WSL and natively on Windows or for people who run services within a VM and on their host machine's OS.
