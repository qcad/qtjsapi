
      // auto generated
      //var self;

      // class constructor:
      function QSslServer() {
        

        // should be QSslServer_BaseJs.call(this, engine):
        //QSslServer.prototype = new QSslServer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslServer.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSslServer);
                
            //}
          }
          else {
            qWarning("QSslServer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSslServer_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslServer);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslServer);
  }

  
  else {
    
        print("QSslServer(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["sslErrors(QSslSocket*,QList<QSslError>)"] = Object.getPrototypeOf(this).sslErrors;
  
    this["peerVerifyError(QSslSocket*,QSslError)"] = Object.getPrototypeOf(this).peerVerifyError;
  
    this["errorOccurred(QSslSocket*,QAbstractSocket::SocketError)"] = Object.getPrototypeOf(this).errorOccurred;
  
    this["preSharedKeyAuthenticationRequired(QSslSocket*,QSslPreSharedKeyAuthenticator*)"] = Object.getPrototypeOf(this).preSharedKeyAuthenticationRequired;
  
    this["handshakeInterruptedOnError(QSslSocket*,QSslError)"] = Object.getPrototypeOf(this).handshakeInterruptedOnError;
  
    this["startedEncryptionHandshake(QSslSocket*)"] = Object.getPrototypeOf(this).startedEncryptionHandshake;
  
            }
          
        }

        

      }

      //QSslServer.prototype = new QSslServer_BaseJs(engine);
      //QSslServer.prototype = new QSslServer_Wrapper(engine);
      QSslServer.prototype = new Object();

      QSslServer.prototype.toString = function() {
          //return "QSslServer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslServer [JS]";
        };
      QSslServer.getObjectType = function() {
        return RJSType_QSslServer.getIdStatic();
      };

      QSslServer.prototype.getObjectType = function() {
        return RJSType_QSslServer.getIdStatic();
      };

      QSslServer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslServer.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTcpServer.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslServer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslServer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      