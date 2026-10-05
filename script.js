document.addEventListener("DOMContentLoaded", function () {



    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }

        });

    }



    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Close mobile menu
            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }

        });

    });


    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });

    const revealElements = document.querySelectorAll(
        ".section, .service-card, .price-card, .trainer-card, .facility-card, .testimonial"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("show");
        });

    }


    // ==========================================
    // 6. CONTACT FORM
    // ==========================================

    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Thank you! Your message has been submitted.");

            contactForm.reset();

        });

    }


    
  

    console.log("IronFit Gym JavaScript loaded successfully.");

});

const membershipModal =
    document.getElementById("membershipModal");

const modalClose =
    document.getElementById("modalClose");

const membershipButtons =
    document.querySelectorAll(".membership-btn");

const selectedPlan =
    document.getElementById("selectedPlan");


// OPEN MODAL

membershipButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const priceCard =
            button.closest(".price-card");

        if (priceCard) {

            const plan =
                priceCard.querySelector("h3").textContent.trim();

            selectedPlan.value = plan;

        }

        membershipModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// CLOSE MODAL

function closeMembershipModal() {

    membershipModal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeMembershipModal
);


// CLOSE WHEN CLICKING OUTSIDE

membershipModal.addEventListener(
    "click",
    function (event) {

        if (event.target === membershipModal) {

            closeMembershipModal();

        }

    }
);


// CLOSE WITH ESCAPE KEY

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            membershipModal.classList.contains("active")
        ) {

            closeMembershipModal();

        }

    }
);
// =========================================================
// MEMBERSHIP FORM → WHATSAPP
// =========================================================

const membershipForm =
    document.getElementById("membershipForm");

if (membershipForm) {

    membershipForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form values
        const name =
            document.getElementById("memberName").value.trim();

        const phone =
            document.getElementById("memberPhone").value.trim();

        const email =
            document.getElementById("memberEmail").value.trim();

        const plan =
            document.getElementById("selectedPlan").value;


        // Basic validation
        if (!name || !phone || !email || !plan) {

            alert("Please fill in all the details.");

            return;
        }


        // Gym owner's WhatsApp number
        // Replace this with the real number
        const gymWhatsApp = "919878546310"


        // WhatsApp message
        const message =
            `Hi IronFit Gym!%0A%0A` +
            `I am interested in joining the gym.%0A%0A` +
            `Name: ${name}%0A` +
            `Phone: ${phone}%0A` +
            `Email: ${email}%0A` +
            `Membership: ${plan}%0A%0A` +
            `Please share the next steps.`;


        // WhatsApp URL
        const whatsappURL =
            `https://wa.me/${gymWhatsApp}?text=${message}`;


        // Open WhatsApp
        window.open(whatsappURL, "_blank");


        // Close modal
        if (membershipModal) {

            membershipModal.classList.remove("active");

            document.body.style.overflow = "";

        }


        // Reset form
        membershipForm.reset();

    });

}
// CONTACT FORM → WHATSAPP
const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const phone = contactForm.querySelector('input[type="tel"]').value.trim();

        const inputs = contactForm.querySelectorAll("input");
        const subject = inputs[3] ? inputs[3].value.trim() : "";

        const messageBox = contactForm.querySelector("textarea");
        const message = messageBox ? messageBox.value.trim() : "";

        if (!name || !email || !phone || !subject || !message) {
            alert("Please fill in all the details.");
            return;
        }

        // Replace with gym owner's WhatsApp number
        const gymWhatsApp = "919876543210";

        const whatsappMessage = `Hi IronFit Gym!

I have a query regarding the gym.

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}

Please get back to me.`;

        const whatsappURL =
            `https://wa.me/${gymWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        contactForm.reset();
    });
}