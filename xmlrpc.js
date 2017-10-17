/** Injectable class for RPCs. */
export class XmlRpc {
  /**
   * Thin wrapper around fetch + DOMParser.
   * @param {string} url
   * @param {!Object<string, string>} params
   * @return {!Promise<!Document>}
   */
  fetch(url, params) {
    const query = Object.keys(params)
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
        .join('&');
    if (query) url = `${url}?${query}`;
    return fetch(url).then(
        response => response.text().then(
            text => new DOMParser().parseFromString(text)));
  }
}
