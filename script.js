
document.getElementById("skinForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
        content: "**Ny skin-förfrågan från hemsidan**",
        embeds: [{
            title: form.skin.value,
            color: 16711680,
            fields: [
                { name: "Float", value: form.float.value },
                { name: "Prisförslag", value: form.price.value },
                { name: "Steam Trade URL", value: form.tradeurl.value }
            ],
            image: { url: form.image.value }
        }]
    };

    fetch("https://discord.com/api/webhooks/1363601813441347725/rCOS-tfBWuvyVDfYkAPLBvDdRnlhRa-8hXWQYVJ2LOX73uYaWERj4DDDQelnXjMyqzOA", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            document.getElementById("statusMsg").textContent = "✔️ Skickat! Vi återkommer snart.";
            form.reset();
        } else {
            document.getElementById("statusMsg").textContent = "❌ Något gick fel. Försök igen.";
        }
    }).catch(() => {
        document.getElementById("statusMsg").textContent = "❌ Kunde inte skicka. Kontrollera din anslutning.";
    });
});
