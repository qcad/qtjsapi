
      // auto generated
      //var self;

      // class constructor:
      function QTcpServer() {
        

        // should be QTcpServer_BaseJs.call(this, engine):
        //QTcpServer.prototype = new QTcpServer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTcpServer.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QTcpServer);
                
            //}
          }
          else {
            qWarning("QTcpServer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTcpServer_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QTcpServer);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTcpServer);
  }

  
  else {
    
        print("QTcpServer(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //QTcpServer.prototype = new QTcpServer_BaseJs(engine);
      //QTcpServer.prototype = new QTcpServer_Wrapper(engine);
      QTcpServer.prototype = new Object();

      QTcpServer.prototype.toString = function() {
          //return "QTcpServer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTcpServer [JS]";
        };
      QTcpServer.getObjectType = function() {
        return RJSType_QTcpServer.getIdStatic();
      };

      QTcpServer.prototype.getObjectType = function() {
        return RJSType_QTcpServer.getIdStatic();
      };

      QTcpServer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTcpServer.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
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
      //QTcpServer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTcpServer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      