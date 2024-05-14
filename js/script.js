const { createApp, onMounted, ref, computed } = Vue;

const appConfig = {
  setup() {
    const exhibitions = ref([
      {
        id: 1,
        title: "GOLDEN FLEECE - THE ART OF GEORGIA",
        time: "05.07.2024 15:00",
        price: 215,
        image: "./img/golden-fleece.jpg",
      },
      {
        id: 2,
        title: "THE EDWARD GOLDSTEIN LIBRARY",
        time: "07.07.2024 09:00",
        price: 109,
        image: "./img/goldstein.jpg",
      },
      {
        id: 3,
        title: "GLITTER OF GOLD. FROM THE COLLECTION OF THE NUMISMATIC CABINET",
        time: "13.07.2024 12:00",
        price: 70,
        image: "./img/glitter-of-gold.jpg",
      },
      {
        id: 4,
        title: "GREETINGS FROM JERUSALEM AVENUE",
        time: "14.07.2024 10:30",
        price: 33,
        image: "./img/jerusalem.jpg",
      },
      {
        id: 5,
        title: "KISSING DOESN’T KILL: ANIA NOWAK",
        time: "19.07.2024 17:00",
        price: 189,
        image: "./img/kissing.jpg",
      },
    ]);

    const selectedExhibitions = ref([]);

    const isModalOpen = ref(false);

    const totalPrice = computed(() => {
      return selectedExhibitions.value.reduce(
        (total, exhibition) => total + exhibition.price,
        0
      );
    });

    const addToCart = (exhibition) => {
      selectedExhibitions.value.push(exhibition);
      localStorage.setItem(
        "selectedExhibitions",
        JSON.stringify(selectedExhibitions.value)
      );
    };

    const removeFromCart = (index) => {
      selectedExhibitions.value.splice(index, 1);
      localStorage.setItem(
        "selectedExhibitions",
        JSON.stringify(selectedExhibitions.value)
      );
    };

    const openModal = (open) => {
      const icon = document.getElementById("footer-icon");
      icon.classList.toggle("hidden");
      isModalOpen.value = open;
    };

    const selectedExhibitionsDetails = computed(() => {
      return selectedExhibitions.value;
    });

    const selectedExhibitionsCount = computed(() => {
      return selectedExhibitions.value.length;
    });

    onMounted(() => {
      console.log("Vue is mounted");
      const storedExhibitions = localStorage.getItem("selectedExhibitions");
      if (storedExhibitions) {
        selectedExhibitions.value = JSON.parse(storedExhibitions);
      }
    });

    return {
      exhibitions,
      selectedExhibitionsDetails,
      selectedExhibitionsCount,
      addToCart,
      totalPrice,
      removeFromCart,
      openModal,
      isModalOpen,
    };
  },
};

createApp(appConfig).mount("#schedule");
