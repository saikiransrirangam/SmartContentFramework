#!/bin/bash

if [ $# -gt 1 ]; then
    echo "Usage: env-start.sh <dev|stage|prod>"
else

    elif [ "$1" = "prod" ]; then
        api_service_router_host=TBD.us-east-1.elb.amazonaws.com
    else
        api_service_router_host=TBD.us-east-1.elb.amazonaws.com
	fi

	# os specific IP detection
	OS="`uname`"
	echo $OS
	case $OS in
	  'Linux')
		if grep -qi microsoft /proc/version; then
		  # WSL
		  host_ip=host.docker.internal
		  #alt_ip=$(ipconfig.exe | grep 'vEthernet (WSL)' -A4 | cut -d":" -f 2 | tail -n1 | sed -e 's/\s*//g')
		  alt_ip=$(ip addr | grep eth0 | grep -E -o "([0-9]{1,3}[\.]){3}[0-9]{1,3}" | head -n 1)
		else
		  # Linux
		  # TODO - auto-detect host_ip / alt_ip
		  host_ip=${host_ip}
		  alt_ip=${host_ip}
		fi
		;;
	  'Darwin')
		  # Mac
		  host_ip=$(ipconfig getifaddr en0)
		  #alt_ip=$(ipconfig getifaddr en0)
		;;
	  *) ;;
	esac
	host_ip="192.168.86.63"
	echo "Host IP: ${host_ip}"
	echo "Alternate IP: ${alt_ip}"
	echo "Zeta API Service Router Host: ${api_service_router_host}"

	docker rm -f haproxy

	docker run -d --name haproxy -p 80:80 -p 443:443 -p 81:81\
	 -v $PWD/haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg\
	 -v $PWD/zeta-local.pem:/usr/local/etc/haproxy/zeta-local.pem\
	 -e X_API_KEY=79WXK2sjmDpzHpcbbfV5KvKboqmOPpII9c\
	 -e HOST_IP=${host_ip}\
	 -e ALT_HOST_IP=${alt_ip}\
	 -e API_SERVICE_ROUTER_HOST=${api_service_router_host}\
	 haproxy:2.7-alpine
 fi
