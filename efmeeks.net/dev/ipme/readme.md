# ipme

ip address looker upper that &hearts;s you

## Demo
<script type="text/javascript" src="https://asciinema.org/a/143047.js?" id="asciicast-143047" async data-speed="1.2" data-autoplay="1" data-loop="1" data-size="medium" data-cols="50" data-rows="15"></script>

## Try 
`curl -Ls file.efmeeks.net/ipme/ipme.sh | bash`

## Get

* Download the script
  * `curl -L file.efmeeks.net/ipme/ipme.sh -o ipme.sh`
* Make it executable
  * `chmod +x ipme.sh`
* Place somewhere in your `$PATH`
  * `mv ipme.sh /usr/local/bin/ipme`
* Check with `$ type ipme`

## Source
```bash
#!/bin/bash
# ipme - ip address looker upper
# https://git.efmeeks.net/ipme
# █████████████████████████████████
# █████████████████████████████████
# ████ ▄▄▄▄▄ █▀█ █▄█▄▀ █ ▄▄▄▄▄ ████
# ████ █   █ █▀▀▀█ ▀▀▄██ █   █ ████
# ████ █▄▄▄█ █▀ █▀▀▄▀▀ █ █▄▄▄█ ████
# ████▄▄▄▄▄▄▄█▄▀ ▀▄█ █ █▄▄▄▄▄▄▄████
# ████▄   ▄█▄▄▄▄▀▄▀▄▄██▄█ █▄█ █████
# █████▀█▀█▄▄█ █▄█▀█  ▀▀█ █ █  ████
# ████▀█▀▄▀█▄█  ▄█▄▀█▄  ▄▀▄▄ ██████
# ████ █▀▄██▄█▄▀█ ▄▄█  ▀▄ █▄▄ ▄████
# ████▄█▄▄██▄▄ ▀▄▄▀▀█  ▄▄▄ ▄▄▄▄████
# ████ ▄▄▄▄▄ █▄▄ █▀ ▄█ █▄█ ██  ████
# ████ █   █ █ ▀▀█▄█▄  ▄ ▄ ▄▄  ████
# ████ █▄▄▄█ █  ▄ ▄█▀▀ ▀█ █▄▄█ ████
# ████▄▄▄▄▄▄▄█▄██▄███████▄▄▄▄▄▄████
# █████████████████████████████████
# █████████████████████████████████

ipme() {
  #public
  echo ''
  echo "public: $(curl -sL http://ipecho.net/plain)"

  #local
  while read ip; do
    echo "local: $ip"
  done < <(ifconfig | egrep 'inet' | egrep -v 'inet6|127' | awk '{ print $2 }')

  #signoff
  echo -e "\x20\x20\xE2\x99\xA1 ipme"; echo ''
}

if [ "$1" == "--nofun" ]; then
  ipme
elif [ -x "$(which lolcat)" ]; then
  ipme | lolcat
else
  ipme
fi

```
