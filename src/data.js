export const questionData = [
  {
    id: 1,
    question: "What's present in my thoughts right now?",
    answers: [
      { text: "Busy or racing", state: "hyperarousal" },
      { text: "Alert, solution-focused, or creative", state: "heightened_engagement" },
      { text: "Clear and present", state: "ventral_vagal" },
      { text: "Quiet, softly unfocused", state: "low_activation" },
      { text: "Clouded or confused", state: "hypoarousal" }
    ]
  },
  {
    id: 2,
    question: "How does my body feel?",
    answers: [
      { text: "Tense or restless", state: "hyperarousal" },
      { text: "Energized or ready to act", state: "heightened_engagement" },
      { text: "Relaxed and comfortable", state: "ventral_vagal" },
      { text: "Soft or cushioned", state: "low_activation" },
      { text: "Drained or hard to feel", state: "hypoarousal" }
    ]
  },
  {
    id: 3,
    question: "What's my breathing like?",
    answers: [
      { text: "Rapid, shallow, a bit tight", state: "hyperarousal" },
      { text: "Charged, full, noticeable", state: "heightened_engagement" },
      { text: "Natural and easy", state: "ventral_vagal" },
      { text: "Slow, deep, without effort", state: "low_activation" },
      { text: "Faint, slow, sometimes held", state: "hypoarousal" }
    ]
  },
  {
    id: 4,
    question: "What emotions are present right now?",
    answers: [
      { text: "Anxious, frustrated, fearful", state: "hyperarousal" },
      { text: "Excited, determined, ambitious", state: "heightened_engagement" },
      { text: "Open, calm, connected", state: "ventral_vagal" },
      { text: "Relaxed, inward, but also spacious", state: "low_activation" },
      { text: "Flat, foggy, disconnected", state: "hypoarousal" }
    ]
  },
  {
    id: 5,
    question: "How is my energy?",
    answers: [
      { text: "Restless or wired", state: "hyperarousal" },
      { text: "High, mobilized, urge to do or fix", state: "heightened_engagement" },
      { text: "Balanced and steady", state: "ventral_vagal" },
      { text: "Low, unwinding, restorative", state: "low_activation" },
      { text: "Drained or frozen", state: "hypoarousal" }
    ]
  }
];

export const stateDescriptions = {
  hyperarousal: {
    title: "Hyperarousal",
    text: "Your nervous system is mobilized for protection. This is a high-energy state often associated with fighting or fleeing. It's okay to feel this way. Consider taking slow, deep exhalations or doing some rhythmic movement to help discharge this energy."
  },
  heightened_engagement: {
    title: "Heightened Engagement",
    text: "You are mobilized for connection or play. Your system has energy available and feels safe enough to use it for focus, creation, or social interaction. Enjoy this productive and dynamic state."
  },
  ventral_vagal: {
    title: "Ventral Vagal",
    text: "You are anchored in safety and connection. Your nervous system is regulated, allowing you to feel present, open, and at ease. This is your home state of balance."
  },
  low_activation: {
    title: "Low Activation",
    text: "Your system is shifting into rest and digest, or gentle conservation. This is a safe, restorative state ideal for winding down, softly unfocusing, and allowing your body to recover."
  },
  hypoarousal: {
    title: "Hypoarousal",
    text: "Your nervous system has moved into immobilization to protect you from overwhelm. You might feel disconnected, numb, or drained. Be gentle with yourself. Small, subtle movements or looking around your space might help you slowly reconnect."
  }
};
