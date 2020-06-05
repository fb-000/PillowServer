module.exports = {
	static: "/public/" /* The static directory that you want to be used for the HTML responses. */,
	home_page: "home" /* The home page of your website */,
	PORT: 80 /* The TCP/port of the server, defaults to the environmental PORT. */,
	trust_proxy: false /* Do you want to trust the proxy? TRUST AT YOUR OWN RISK!*/,

	log_IPs: true /* Do you want to log IPs on request? */,
	blacklisted_IPs: [

	] /* Ban the IPs that you don't want to access your webserver. NOTE THIS WILL ONLY WORK WHEN YOU HAVE "TRUST PROXY" ENABLED WHEN ON A PROXY NETWORK */
}