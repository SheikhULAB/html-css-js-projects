const testimonials = [
    {
      name: "Sheikh Yeamin",
      photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Our AI-powered testimonial generator is a tool that helps you create authentic, personalized testimonials. Often, when mocking up a landing page design, or a marketing page, you'll have testimonials/reviews on it."
    },
    {
      name: "Jane Doe",
      photoUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1587&auto=format&fit=crop",
      text: "This testimonial generator helped streamline our review process, allowing us to showcase a variety of authentic experiences from our satisfied users."
    },
    {
      name: "John Smith",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop",
      text: "By using this tool, our website now boasts genuine testimonials that not only enhance credibility but also improve overall engagement with potential customers."
    }
  ];


  const imgEl = document.querySelector("img");
  const textEL = document.querySelector(".text");
  const userNameEl = document.querySelector(".username");

  let idx = 0;

  updateTestimonial();
  
  function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEL.innerText = text;
    userNameEl.innerText = name;
    idx++;
    if(idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 2000);
  }