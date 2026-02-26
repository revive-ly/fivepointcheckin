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
    title: "You’re likely in a state of Hyperarousal- a period of heightened stress or activation in your sympathetic nervous system. ",
    text: "This is a normal nervous-system response and happens to everyone. The key now is to tune in and notice: is there a true emergency, or does it just feel like one?\nEither way, the fact that you’re checking in is a very good sign that you’re open to seeing your other options. The SETTLE section has activities specifically designed for moments like this, offering practices to meet you where you are and bringing some relief to your activated nervous system.\nIf you’d like a bit more comfort before shifting state, you can choose a NURTURE practice from Resilience Resources, or something else from your favorites. What matters most is pausing, so you can meet yourself where you are and respond from a more centered place.",
    actions: [
      { label: "SETTLE", url: "http://revively.com/settle" },
      { label: "RESILIENCE RESOURCES", url: "https://www.revively.com/rrtest" }
    ]
  },
  heightened_engagement: {
    title: "You’re likely experiencing Heightened Engagement - energized and stimulated, but not overwhelmed.",
    text: "This can be a constructive state for focus, productivity, and creative action. If this feels good and sustainable, you can savor where you are. \n You may also consider choosing a softening activity from SETTLE to downshift your state.\nThe important thing is pausing to check in, so you can choose the next step that feels right for you - whether that’s remaining where you are or gently pivoting back through SETTLE to ventral vagal state. As always, the Resilience Resources and your selected favorites are also available if you’d prefer something different.",
    actions: [
      { label: "SETTLE", url: "http://revively.com/settle" },
      { label: "RESILIENCE RESOURCES", url: "https://www.revively.com/rrtest" }
    ]
  },
  ventral_vagal: {
    title: "You’re likely leading with your Ventral Vagal System - a state of safety, calm, and connection.",
    text: "In this space, you can think clearly, experience well-being, and connect meaningfully with others. \n If this sounds like you, take a moment to really notice how it feels in your body. The more often you sense this ventral state, the easier it becomes to recognize it – and to notice when you’ve shifted away from it. \n If you’re up for it, please proceed to the Vagal Condititioning area where you can select an activity to expand your vagal range and flexibility. If that doesn’t feel right just now, the Resilience Resources and your selected favorites are available to you as well. ",
    actions: [
      { label: "VAGAL CONDITIONING", url: "https://revively.passion.io/app/products/303795/lessons/5010370" },
      { label: "RESILIENCE RESOURCES", url: "https://www.revively.com/rrtest" }
    ]
  },
  low_activation: {
    title: "You’re likely experiencing Low Activation - restorative, meditative, gently aware.",
    text: "This is an ideal phase for recovery, reflection, and recharging your internal resources. \n You can dwell in this valuable downtime. However, if you’re looking to re-engage, you can choose an energizing activity from BOOST. \n The important thing is pausing to check in, so you can choose the next step that feels right for you - whether that’s remaining where you are or pivoting through BOOST to ventral vagal state. As always, the Resilience Resources and your selected favorites are also available if you’d prefer something different.",
    actions: [
      { label: "BOOST", url: "https://revively.passion.io/app/products/303795/lessons/5010390" },
      { label: "RESILIENCE RESOURCES", url: "https://www.revively.com/rrtest" }
    ]
  },
  hypoarousal: {
    title: "You’re likely in a state of Hypoarousal - a period of low energy and disconnection, which is led by your dorsal vagal system.",
    text: "This is a normal nervous-system response, which occurs after overwhelm, stress or exhaustion. It’s the body slowing down and conserving energy. \n This is a good time to check in to notice what you have the capacity for. The BOOST section has activities specifically designed for moments like this, offering practices to meet you where you are to re-energize and activate your system. \n  But, if this feels like too much, you can go to the Resilience Resources, and select an option from NURTURE, or use one of your favorites. What matters most is pausing to notice where you are, so you meet yourself gently and invite a bit more connection.",
    actions: [
      { label: "BOOST", url: "https://revively.passion.io/app/products/303795/lessons/5010390" },
      { label: "RESILIENCE RESOURCES", url: "https://www.revively.com/rrtest" }
    ]
  }
};
