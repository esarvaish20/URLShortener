function generateCode(length = 6) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function shortenURL() {
    const longUrl = document.getElementById("longUrl").value;
    if (!longUrl) {
        alert("Please enter a URL.");
        return;
    }

    const code = generateCode();
    localStorage.setItem(code, longUrl);
    const shortUrl = `${window.location.origin}${window.location.pathname}?c=${code}`;

    document.getElementById("result").innerHTML =
        `Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('c');
    if (code) {
        const originalUrl = localStorage.getItem(code);
        if (originalUrl) {
            window.location.href = originalUrl;
        } else {
            document.getElementById("result").innerText = "Invalid short URL!";
        }
    }
};
