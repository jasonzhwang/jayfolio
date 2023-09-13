const SendEmail = () => {
  const receiverEmail = "jason.zhw.work@gmail.com";
  const subject = "Your Subject Here"; // Replace with your desired email subject
  const body = "Your email body text goes here."; // Replace with your desired email body

  // Construct the mailto link
  const mailtoLink = `mailto:${receiverEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the user's email client
  window.location.href = mailtoLink;
};

export default SendEmail;
