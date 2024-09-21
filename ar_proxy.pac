function FindProxyForURL(url, host) {
    // Proxy Android connectivity check URLs
    if (shExpMatch(url, "http://connectivitycheck.gstatic.com/generate_204") ||
        shExpMatch(url, "http://clients3.google.com/generate_204") ||
        shExpMatch(url, "http://www.google.com") ||
        shExpMatch(url, "http://play.googleapis.com/generate_204")) {
        return "PROXY 10.22.3.113:3128";
    }

    // Proxy for gstatic.com domains
    if (dnsDomainIs(host, ".gstatic.com")) {
        return "PROXY 10.22.3.113:3128";
    }

    // Proxy for netaccess.iitm.ac.in
    if (dnsDomainIs(host, "netaccess.iitm.ac.in")) {
        return "PROXY 10.22.3.113:3128";
    }

    // For all other domains, direct connection
    return "DIRECT";
}
