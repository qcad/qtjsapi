
      // auto generated
      //var self;

      // class constructor:
      function QSslSocket() {
        

        // should be QSslSocket_BaseJs.call(this, engine):
        //QSslSocket.prototype = new QSslSocket_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslSocket.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSslSocket);
                
            //}
          }
          else {
            qWarning("QSslSocket.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QSslSocket.js: No constructor found for class QSslSocket");
            
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
              
    this["peerVerifyError(QSslError)"] = Object.getPrototypeOf(this).peerVerifyError;
  
    this["sslErrors(QList<QSslError>)"] = Object.getPrototypeOf(this).sslErrors;
  
    this["modeChanged(QSslSocket::SslMode)"] = Object.getPrototypeOf(this).modeChanged;
  
    this["encryptedBytesWritten(qint64)"] = Object.getPrototypeOf(this).encryptedBytesWritten;
  
    this["preSharedKeyAuthenticationRequired(QSslPreSharedKeyAuthenticator*)"] = Object.getPrototypeOf(this).preSharedKeyAuthenticationRequired;
  
    this["handshakeInterruptedOnError(QSslError)"] = Object.getPrototypeOf(this).handshakeInterruptedOnError;
  
            }
          
        }

        

      }

      //QSslSocket.prototype = new QSslSocket_BaseJs(engine);
      //QSslSocket.prototype = new QSslSocket_Wrapper(engine);
      QSslSocket.prototype = new Object();

      QSslSocket.prototype.toString = function() {
          //return "QSslSocket [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslSocket [JS]";
        };
      QSslSocket.getObjectType = function() {
        return RJSType_QSslSocket.getIdStatic();
      };

      QSslSocket.prototype.getObjectType = function() {
        return RJSType_QSslSocket.getIdStatic();
      };

      QSslSocket.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslSocket.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTcpSocket.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: PeerVerifyMode
QSslSocket.VerifyNone = QSslSocket_Wrapper.VerifyNone;
QSslSocket.QueryPeer = QSslSocket_Wrapper.QueryPeer;
QSslSocket.VerifyPeer = QSslSocket_Wrapper.VerifyPeer;
QSslSocket.AutoVerifyPeer = QSslSocket_Wrapper.AutoVerifyPeer;


      // functions:
      

      // static functions:
      

        // static function 
        QSslSocket.supportsSsl = function() 
          
        {
          //print("JS: QSslSocket.supportsSsl");
          
        };
      

        // static function 
        QSslSocket.sslLibraryVersionNumber = function() 
          
        {
          //print("JS: QSslSocket.sslLibraryVersionNumber");
          
        };
      

        // static function 
        QSslSocket.sslLibraryVersionString = function() 
          
        {
          //print("JS: QSslSocket.sslLibraryVersionString");
          
        };
      

        // static function 
        QSslSocket.sslLibraryBuildVersionNumber = function() 
          
        {
          //print("JS: QSslSocket.sslLibraryBuildVersionNumber");
          
        };
      

        // static function 
        QSslSocket.sslLibraryBuildVersionString = function() 
          
        {
          //print("JS: QSslSocket.sslLibraryBuildVersionString");
          
        };
      

        // static function 
        QSslSocket.availableBackends = function() 
          
        {
          //print("JS: QSslSocket.availableBackends");
          
        };
      

        // static function 
        QSslSocket.activeBackend = function() 
          
        {
          //print("JS: QSslSocket.activeBackend");
          
        };
      

        // static function 
        QSslSocket.setActiveBackend = function() 
          
        {
          //print("JS: QSslSocket.setActiveBackend");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslSocket.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslSocket.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      