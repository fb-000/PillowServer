const config = require(`./config`);
const server = require(`express`)();
const fs = require(`fs`);
const path = require(`path`);

const PORT = config.PORT | process.env.PORT;

server.enable(`trust proxy`, config.trust_proxy);

server.use((req, res, next) => {
           res.status(404).sendStatus(404);
           })

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

server.get(`/`, (req, res) => {
    res.redirect(config.home_page);
})

server.get(`/:page`, (req, res) => {
    if(config.log_IPs) {
        console.warn("Got request from " + req.ip + ` (IP blacklisted: ${config.blacklisted_IPs.includes(req.ip)})`);
    }
    if(config.blacklisted_IPs.includes(req.ip)) return res.send(
        `You got banned from this site!`
        )

        let page = req.params.page;
        if(fs.existsSync(path.join(__dirname + `${config.static}/${page}.html`))) return res.sendFile(path.join(__dirname + `${config.static}/${page}.html`));
})
