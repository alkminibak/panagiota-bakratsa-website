import espaBadge from "../assets/espa-badge.png";

const EspaBadge = () => {
  return (
    <a
      href="/documents/espa-program.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Πληροφορίες συγχρηματοδοτούμενου προγράμματος"
      className="block"
    >
      <img
        src={espaBadge}
        alt="Ευρωπαϊκή Ένωση και ΕΣΠΑ"
        className="h-auto w-[180px]"
      />
    </a>
  );
};

export default EspaBadge;
