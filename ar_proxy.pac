function FindProxyForURL(url, host) {
    // Proxy Android connectivity check URLs
    if (shExpMatch(url, "http://connectivitycheck.gstatic.com/generate_204") ||
        shExpMatch(url, "http://clients3.google.com/generate_204") ||
        shExpMatch(url, "http://play.googleapis.com/generate_204")) {
        return "PROXY 34.74.12.142:3128";
    }

    // Proxy for gstatic.com domains
    if (dnsDomainIs(host, ".gstatic.com")) {
        return "PROXY 34.74.12.142:3128";
    }

    if (dnsDomainIs(host, "netaccess.iitm.ac.in")) {
        return "PROXY 34.74.12.142:3128";
    }

    // For all other domains, direct connection
    return "DIRECT";
}
