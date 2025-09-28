// KASA/react/src/components/getErrorMessage.jsx

function getErrorMessage(status) {
  const message = {
    404: [
      "Oups ! La page que ",
      "vous demandez n'existe pas."
    ],
    default: [
      "Oups ! Une erreur est ",
      "survenue. Veuillez réessayez plus tard."
    ]
  };

  const lines = message[status] || message.default;

  return {
    title: status === 404 ? "404" : "Erreur",
    message: (
      <>
        {lines.map((line, index) => (
          <span
            key={`${status}-${index}`}
            className="not-found__message-line"
          >
            {line}
          </span>
        ))}     
      </>
    )
  };
}

export default getErrorMessage