export default class HttpClient {
    constructor(responseTimeout, url){
        this.CONTENT_TYPE_HEADER = "Content-Type";
        this.POST_HEADER = "POST";
        this._headers = new Headers();
        this._headers.append(this.CONTENT_TYPE_HEADER, 'application/json');
        this._headers.append('Accept', 'application/json');
        this._url = url;
        this._urlWithParams = url;
        this._responseTimeout = responseTimeout;

        this.postMethod = {
            method: this.POST_HEADER,
            headers: null,
            body: null
        };

    }

    resetURL(){
        this._urlWithParams = this._url;
    }


    post(data) {

        /// this._headers.append("ACCEPT_CHARSET", StandardCharsets.UTF_8.name());
        this.postMethod.headers = this._headers;
        this.postMethod.body = JSON.stringify(data);
        return this.fetchContent(this.postMethod);
    }


    async fetchContent(method){

       try {
           let response = await fetch(this._urlWithParams, method);
           response = await response.json();
           return response;
       }catch(e){
           console.log(e.message);
       }
    };

}