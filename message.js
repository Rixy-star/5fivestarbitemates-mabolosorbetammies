const topics = {
    topic1: {
      Product: "Our product, Mabolo Morbetammies, is available for only 142 pesos. It is a ice cream flavored with mabolo fruit which is also known as 'kamagong'. It has gummies that adds flavor to the ice cream.",
      DeliveryandPayment: "You can choose delivery services you want. You can see the different delivery services that you can choose from in the 'Delivery Button' under 'Want to Order Now?",
      Others: "For more questions or inquiries, contact us at our social media accounts.",
    },
    topic2: {
      Store: "Welcome to Five Star Bitemates, your ultimate destination for delicious, handcrafted ice cream! 🍦 We offer a wide variety of flavors, from classic favorites to unique creations, made fresh with the finest ingredients. Whether you're craving a cone, cup, or sundae, we’ve got something sweet for everyone. Stop by and treat yourself today!",
      Location: "We are located at Barangay VI, Bagasbas Road, Daet, Camarines Norte. ",
    },
    topic3: {
      DirectContact: "You can call us at 09512993517.",
      Order: "For bulk order, you can visit us directly at our store for clear discussion. We accept bulk order just inside Camarines Norte to avoid the ice cream from melting while delivery time.",
      Reminder: "Snack time heals all wounds.",
    },
  };
  
  const chatBox = document.getElementById("chatBox");
  const mainTopicMenu = document.getElementById("mainTopicMenu");
  const subtopicsContainer = document.getElementById("subtopicsContainer");
  
  // Listen for main topic selection
  mainTopicMenu.addEventListener("change", () => {
    const selectedTopic = mainTopicMenu.value;
    const subtopics = topics[selectedTopic];
  
    if (subtopics) {
      displayMessage(`You selected: ${selectedTopic.replace("topic", "Main Topic ")}`, "user-message");
      showSubtopics(subtopics);
    } else {
      subtopicsContainer.innerHTML = "";
    }
  });
  
  // Display subtopics as buttons
  function showSubtopics(subtopics) {
    subtopicsContainer.innerHTML = "";
    for (const [key, value] of Object.entries(subtopics)) {
      const button = document.createElement("button");
      button.className = "subtopic-button";
      button.textContent = key.replace("sub", "Subtopic ");
      button.addEventListener("click", () => {
        displayMessage(value, "ai-message");
      });
      subtopicsContainer.appendChild(button);
    }
  }
  
  // Function to display messages in the chatbox
  function displayMessage(text, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
  }
  