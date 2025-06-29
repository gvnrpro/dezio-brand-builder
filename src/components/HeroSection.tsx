<!-- HTML -->
<div class="hero">
  <div class="navbar">
    <!-- [navbar goes here] -->
  </div>
  <div class="hero__title-wrapper">
    <div class="hero__text">
      <p class="hero__subtitle">We are</p>
      <h1 class="hero__brand">DEZIRO</h1>
    </div>
    <div class="hero__title--rotating">
      <p class="hero__title--word">Innovators</p>
      <p class="hero__title--word">Visionaries</p>
      <p class="hero__title--word">Storytellers</p>
      <p class="hero__title--word">Inquisitive</p>
      <p class="hero__title--word">Focused</p>
    </div>
  </div>
  <div class="scroll-icon">
    <!-- [scroll icon goes here] -->
  </div>
</div>

<!-- CSS -->
<style>
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.hero {
  background-color: #03045e;
  font-family: "Titillium Web", sans-serif;
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero__title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
}

.hero__text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__subtitle {
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.hero__brand {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  text-transform: uppercase;
  border-right: 3px solid #177dff;
  padding-right: 1rem;
  margin-bottom: 0.5rem;
}

.hero__title--rotating {
  position: relative;
  height: 80px;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  text-align: center;
}

.hero__title--word {
  color: #177dff;
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 800;
  height: 80px;
  line-height: 80px;
  transition: margin-top 0.4s ease-in-out;
}

/* Mobile Stack */
@media (max-width: 768px) {
  .hero__title-wrapper {
    flex-direction: column;
  }

  .hero__brand {
    padding-right: 0;
    border: none;
  }
}
</style>

<!-- JavaScript -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const ticker = document.querySelector(".hero__title--rotating");
    const words = ticker.querySelectorAll(".hero__title--word");
    let currentIndex = 0;

    function showNextWord() {
      words.forEach((word, index) => {
        word.style.marginTop = `${(index - currentIndex) * 80}px`;
      });

      currentIndex++;
      if (currentIndex >= words.length) {
        currentIndex = 0;
      }
    }

    showNextWord();
    setInterval(showNextWord, 2000);
  });
</script>
