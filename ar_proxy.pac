//var="PROXY HTTP 10.22.3.113:3128"
var="PROXY HTTPS iitmproxy.ddns.net"

function FindProxyForURL(url, host) {
    // Proxy Android connectivity check URLs
    if (shExpMatch(url, "http://connectivitycheck.gstatic.com/generate_204") ||
        shExpMatch(url, "http://clients3.google.com/generate_204") ||
        shExpMatch(url, "http://play.googleapis.com/generate_204")) {
        return var;
    }

    // Proxy for gstatic.com domains
    if (dnsDomainIs(host, ".gstatic.com")) {
        return var;
    }

    if (dnsDomainIs(host, "ipinfo.io")) {
        return var;
    }

    // For all other domains, direct connection
    return "DIRECT";
}
