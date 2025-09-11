export function validateNumbers(req, _res, next) {
  const { numeros } = req.body;
  if (!Array.isArray(numeros) || numeros.some((n) => isNaN(n))) {
    return next(new Error('Parâmetros inválidos'));
  }
  next();
}
