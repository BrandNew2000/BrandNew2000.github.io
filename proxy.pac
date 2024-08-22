function FindProxyForURL(url, host) {

	var pURL = "HTTPS remote.iitm.ac.in:8372";	

	var jlist = [
		".aappublications.org",
		".accessengineeringlibrary.com",
		".acm.org",
		".acousticstoday.org",
		".acs.org",
		".aeaweb.org",
		".aiaa.org",
		".aip.org",
		".ametsoc.org",
		".ams.org",
		".annualreviews.org",
		".apa.org",
		".aps.org",
		".asadl.org",
		".ascelibrary.org",
		".asme.org",
		".asminternational.org",
		".asm.org",
		".aspetjournals.org",
		".astm.org",
		".begellhouse.com",
		".biologists.org",
		".bmj.com",
		".brill.com",
		".bsb.co.in",
		".cambridge.org",
		".capitaline.com",
		".cas.org",
		".chemengonline.com",
		".chemistry.or.jp",
		".clarivate.com",
		".cmie.com",
		".concrete.org",
		".corrosionjournal.org",
		".crcnetbase.com",
		".crisil.com",
		".crisilresearch.com",
		"cshlp.org",
		".cshlpress.com",
		".degruyter.com",
		".dukejournals.org",
		".dukeupress.edu",
		".dynamed.com",
		".earthquakespectra.org",
		".ebrary.com",
		".ebscohost.com",
		".economist.com",
		".ecsdl.org",
		".elgaronline.com",
		".elsevier.com",
		".emerald.com",
		".emeraldinsight.com",
		".emis.com",
		".ems-ph.org",
		".epw.in",
		".euromonitor.com",
		".f1000.com",
		".genetics.org",
		".geo-slope.com",
		".hanser-elibrary.com",
		".hedhme.com",
		".heldermann.de",
		".hvdc.ca",
		".iahr.org",
		".iatul.org",
		".icevirtuallibrary.com",
		".icjonline.com",
		".ieee.org",
		".ietdl.org",
		".igs.org.in",
		".impan.pl",
		".inderscienceonline.com",
		".indiana.edu",
		".indianjournals.com",
		".informs.org",
		".ingentaconnect.com",
		".iop.org",
		".iospress.com",
		"ipublishcentral.com",
		".isid.org.in",
		"isiknowledge.com",
		".istructe.org",
		".iwaponline.com",
		".jbc.org",
		".jgateplus.com",
		".jhu.edu",
		".jimmunol.org",
		".jneurosci.org",
		".journal.csj.jp",
		".journalofgreenbuilding.com",
		".jps.jp",
		".jstage.jst.go.jp",
		".jstor.org",
		".knovel.com",
		".kopernio.com",
		".math.uh.edu",
		".mendeley.com",
		".mhebooklibrary.com",
		".mheducation.com",
		".microbiologyresearch.org",
		".mitpressjournals.org",
		".msp.org",
		".myilibrary.com",
		".nature.com",
		".nowpublishers.com",
		".nrcresearchpress.com",
		".nytimes.com",
		".oldcitypublishing.com",
		".onepetro.org",
		".orbit.com",
		".osapublishing.org",
		".oup.com",
		".oxfordjournals.org",
		".oxfordscholarship.com",
		".pearson.com",
		".physiology.org",
		".pnas.org",
		".projecteuclid.org",
		".proquest.com",
		".rina.org.uk",
		".routledge.com",
		".royalsocietypublishing.org",
		".rsc.org",
		".rupress.org",
		".sae.org",
		".sagepub.com",
		".sciencedirect.com",
		".sciencemag.org",
		".scientific.net",
		"scifinder.cas.org",
		".scitation.org",
		".scopus.com",
		".securities.com",
		".siam.org",
		".southasiaarchive.com",
		".spiedigitallibrary.org",
		".springer.com",
		".tandfebooks.com",
		".tandfonline.com",
		".taylorfrancis.com",
		".tcetoday.com",
		".techno-press.org",
		".techscience.com",
		".techstreet.com",
		".teriin.org",
		".theiet.org",
		".thejot.net",
		".thieme-connect.com",
		".thomsoninnovation.com",
		".thomsonreuters.com",
		".trb.org",
		".ttp.net",
		".turnitin.com",
		".uchicago.edu",
		".uptodate.com",
		".webofknowledge.com",
		".wiley.com",
		".wileyindia.com",
		".worldscientific.com",
		".xlpat.com",	
		".science.org",	
		".pressreader.com",	
		".lanquill.com",	
		".pressreader.com",
		".gov.in"	
	];

	var exceplist = [
		//"netaccess.iitm.ac.in",
		"courses.iitm.ac.in",
		"jup.dev.iitm.ac.in",
		"eex.dev.iitm.ac.in",
		"remote.iitm.ac.in"
	];
	
	// Bypass proxy if in IITM
	
	if (isResolvable("netaccess.iitm.ac.in")) {
		return "DIRECT";
	}
	
	// Use proxy for journals/
	
	for (var i=0; i<jlist.length; i++) {
		if (dnsDomainIs(host, jlist[i])) {
			return pURL;
		}
	}

	
	// Bypass proxy if host can be resolved anyway.
	
	if (isResolvable(host)) {
		return "DIRECT";
	}
	
	// Use proxy for PlainHostNames if non-local.
	
	if (isPlainHostName(host)) {
		return pURL;
	}
	
	// Use proxy if iitm address.
	
	if (isInNet(host, "10.6.0.0", "255.255.0.0")) {
		return pURL;
	}
	
	//for (var i=0; i<exceplist.length; i++) {
	//	if (dnsDomainIs(host, exceplist[i])) {
	//		return "DIRECT";
	//	}
	//}

	// Use proxy with iitm domain if not directly resolvable.

	if (dnsDomainIs(host, ".iitm.ac.in")) {
		return pURL;
	}


	
	return "DIRECT";

}
