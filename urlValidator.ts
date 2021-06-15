export function isValidHttpUrl(url: string) {
    let tempurl;
  
    try {
        tempurl = new URL(url);
    } catch (_) {
      return false;  
    }
    
    if(validURL(url)){
        return tempurl.protocol === "http:" || tempurl.protocol === "https:";
    } else {
        return false;
    }
  }

  function validURL(url: string) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
  }
