// posting info to google email for conatct

function sendEmail() {
    var userName = document.getElementById('Name').value;
    var lastname = document.getElementById('Surname').value;
    var phone =  document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var messagebox = document.getElementById('message').value;
    var messageBody = "Name " + userName + " <span> </span> " + lastname + "<br/> Phone " + phone + "<br/> Email " + email + "<br/> " + messagebox;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "eliaskufakunesu3@gmail.com",
       // E44C8EBAA1F60C73A0C6F84863FCD4B59C5E
       //eliaskufakunesu07@gmail.com
        Password : "1E0631B4BE1EC948D0D011EB386C4F3A2809",
        To : 'eliaskufakunesu3@gmail.com',
        From : "My site",
        Subject : "Portfolio Request",
        Body : messageBody
    }).then(
      message => {
        if(message == 'OK'){
            swal("Request Successful", "SEND!", "success");
        }else{
            swal("error", "FAILED!", "error");
        }
      }
    );
};



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements_two = document.querySelectorAll('.hidden_two');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements_two.forEach((el) => observer.observe(el));

//onclick scroll to top button 
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollup');

    // Show the button when scrolling down 100px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top function
    window.scrollToTop = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});

// Portfolio link https://drive.google.com/drive/folders/1px4mJ7SvMQiaJxJMH3Cy01FSGkcnZKpw?usp=drive_link

function portfolio() {
    window.location.href = 'https://drive.google.com/drive/folders/1px4mJ7SvMQiaJxJMH3Cy01FSGkcnZKpw?usp=drive_link';
}

//RESUME AND CV 

function Download_CV(){
    window.location.href = 'https://drive.google.com/drive/folders/1auni1yVV66h3q9jNVTeJJ7i6P1JxXpzV?usp=drive_link ';
}

function linkden () {
    window.location.href = 'https://www.linkedin.com/in/elias-kufakunesu-a549611a9/?trk=opento_sprofile_goalscard';
}
function whatsApp() {
    window.location.href = '#';
}

function twitter() {
    window.location.href = 'https://x.com/zifmstereo/status/1803720951361614020?s=46&t=XkEe0z6Ty2aV9cfHvieXXg';
}

function facebook() {
    window.location.href = 'https://www.facebook.com/profile.php?id=100077841641204';
}

