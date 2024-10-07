function FindProxyForURL(url, host) {
    
    //var="PROXY HTTP 10.22.3.113:3128"
    var pURL = "HTTP iitmproxy.ddns.net:3128";


    // Proxy Android connectivity check URLs
    if (shExpMatch(url, "http://connectivitycheck.gstatic.com/generate_204") ||
        shExpMatch(url, "http://clients3.google.com/generate_204") ||
        shExpMatch(url, "http://play.googleapis.com/generate_204") ||
        shExpMatch(url, "http://www.gstatic.com/generate_204")) {
        return pURL;
    }

    // Proxy for gstatic.com domains
    //if (dnsDomainIs(host, "www.gstatic.com")) {
    //    return pURL;
    //}

    if (dnsDomainIs(host, ".ipinfo.io")) {
        return pURL;
    }

    if (dnsDomainIs(host, "netaccess.iitm.ac.in")) {
        return pURL;
    }
    // For all other domains, direct connection
    return "DIRECT";
}
