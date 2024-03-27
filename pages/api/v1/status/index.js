function status(request, response) {
  response.status(200).json({ chave: "Vamo q vamo família" });
}

export default status;
