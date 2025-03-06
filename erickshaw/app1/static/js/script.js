document.addEventListener("DOMContentLoaded", function () {
    const dropdownField = document.querySelector(".custom-dropdown input");
    const dropdownOptions = document.querySelector(".dropdown-options");

    dropdownField.addEventListener("click", function () {
        dropdownOptions.classList.toggle("show");
    });

    document.querySelectorAll(".dropdown-options div").forEach(option => {
        option.addEventListener("click", function () {
            dropdownField.value = this.innerText;
            dropdownOptions.classList.remove("show");
        });
    });

    document.addEventListener("click", function (event) {
        if (!dropdownField.contains(event.target) && !dropdownOptions.contains(event.target)) {
            dropdownOptions.classList.remove("show");
        }
    });

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        const state = document.querySelector("input[name='state']").value.trim();
        const series = document.querySelector("input[name='series']").value.trim();
        const lastDigits = document.querySelector("input[name='last_digits']").value.trim();
        
        if (state === "" || series === "" || lastDigits === "") {
            alert("कृपया सभी फ़ील्ड्स भरें!");
            return;
        }
        
        if (!/^[A-Z]{2}[0-9]{2}$/.test(state)) {
            alert("राज्य को सही फॉर्मेट में भरें (उदाहरण: UP85)");
            return;
        }
        
        if (!/^[0-9]{4}$/.test(lastDigits)) {
            alert("अंतिम 4 अंक केवल संख्याएँ होनी चाहिए!");
            return;
        }
        
        alert("फॉर्म सफलतापूर्वक सबमिट हुआ!");
        event.target.submit();
    });
});
