particlesJS("particles-js", {
  particles: {
    number: {
      value: 200, // Number of particles
      density: {
        enable: true,
        value_area: 800, // Area density for particles
      },
    },
    color: {
      value: "#ffffff", // Particle color
    },
    shape: {
      type: "circle", // Particle shape
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5, // Opacity of particles
      random: true, // Random opacity
      anim: {
        enable: true, // Enable opacity animation
        speed: 1,
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 4, // Size of particles
      random: true,
      anim: {
        enable: true, // Enable size animation
        speed: 10,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true, // Enable lines between particles
      distance: 150, // Maximum distance for connecting lines
      color: "#ffffff", // Line color
      opacity: 0.4, // Line opacity
      width: 1, // Line thickness
    },
    move: {
      enable: true, // Enable movement
      speed: 3, // Speed of particles
      direction: "none", // Random movement direction
      random: false, // Non-random motion
      straight: false, // Non-linear movement
      out_mode: "out", // Particles bounce off the edges
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas", // Interactivity is based on the canvas
    events: {
      onhover: {
        enable: true, // Enable hover effect
        mode: "repulse", // Particles move away from cursor
      },
      onclick: {
        enable: true, // Enable click effect
        mode: "push", // Add more particles on click
      },
      resize: true, // Adjust particles on window resize
    },
    modes: {
      grab: {
        distance: 200, // Grab mode activation distance
        line_linked: {
          opacity: 1, // Line opacity when grabbed
        },
      },
      bubble: {
        distance: 200, // Distance to create bubble effect
        size: 40, // Bubble size
        duration: 2, // Duration of bubble effect
        opacity: 0.8, // Opacity of bubble
        speed: 3, // Speed of bubble
      },
      repulse: {
        distance: 100, // Distance for repulse effect
        duration: 0.4, // Duration of repulse effect
      },
      push: {
        particles_nb: 4, // Number of particles added on click
      },
      remove: {
        particles_nb: 2, // Number of particles removed on interaction
      },
    },
  },
  retina_detect: true, // High-DPI support
});
