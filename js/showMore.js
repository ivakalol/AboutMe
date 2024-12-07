function toggleContent(index) {
    const dots = document.getElementById(`dots${index}`);
    const moreText = document.getElementById(`more${index}`);
    const btnText = document.getElementById(`myBtn${index}`);

    if (dots.style.display === "none") {
        // Hide the expanded content
        dots.style.display = "inline";
        btnText.textContent = "Show more";
        moreText.style.display = "none";
    } else {
        // Show the expanded content
        dots.style.display = "none";
        btnText.textContent = "Show less";
        moreText.style.display = "inline";

        // Smoothly scroll 
        moreText.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}
