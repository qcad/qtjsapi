
      // auto generated
      //var self;

      // class constructor:
      function QHostAddress() {
        

        // should be QHostAddress_BaseJs.call(this, engine):
        //QHostAddress.prototype = new QHostAddress_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHostAddress.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QHostAddress);
                
            //}
          }
          else {
            qWarning("QHostAddress.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QHostAddress_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QHostAddress);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHostAddress);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QHostAddress_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QHostAddress);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHostAddress);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QHostAddress_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QHostAddress);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHostAddress);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QHostAddress_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QHostAddress);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHostAddress);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QHostAddress_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QHostAddress);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHostAddress);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QHostAddress_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QHostAddress);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHostAddress);
  }

  
  else {
    
        print("QHostAddress(): wrong number / type of arguments");
      
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

      //QHostAddress.prototype = new QHostAddress_BaseJs(engine);
      //QHostAddress.prototype = new QHostAddress_Wrapper(engine);
      QHostAddress.prototype = new Object();

      QHostAddress.getObjectType = function() {
        return RJSType_QHostAddress.getIdStatic();
      };

      QHostAddress.prototype.getObjectType = function() {
        return RJSType_QHostAddress.getIdStatic();
      };

      QHostAddress.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHostAddress.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: SpecialAddress
QHostAddress.Null = QHostAddress_Wrapper.Null;
QHostAddress.Broadcast = QHostAddress_Wrapper.Broadcast;
QHostAddress.LocalHost = QHostAddress_Wrapper.LocalHost;
QHostAddress.LocalHostIPv6 = QHostAddress_Wrapper.LocalHostIPv6;
QHostAddress.Any = QHostAddress_Wrapper.Any;
QHostAddress.AnyIPv6 = QHostAddress_Wrapper.AnyIPv6;
QHostAddress.AnyIPv4 = QHostAddress_Wrapper.AnyIPv4;

  // enum: ConversionModeFlag
QHostAddress.ConvertV4MappedToIPv4 = QHostAddress_Wrapper.ConvertV4MappedToIPv4;
QHostAddress.ConvertV4CompatToIPv4 = QHostAddress_Wrapper.ConvertV4CompatToIPv4;
QHostAddress.ConvertUnspecifiedAddress = QHostAddress_Wrapper.ConvertUnspecifiedAddress;
QHostAddress.ConvertLocalHost = QHostAddress_Wrapper.ConvertLocalHost;
QHostAddress.TolerantConversion = QHostAddress_Wrapper.TolerantConversion;
QHostAddress.StrictConversion = QHostAddress_Wrapper.StrictConversion;

  // enum: NetworkLayerProtocol
QHostAddress.IPv4Protocol = QHostAddress_Wrapper.IPv4Protocol;
QHostAddress.IPv6Protocol = QHostAddress_Wrapper.IPv6Protocol;
QHostAddress.AnyIPProtocol = QHostAddress_Wrapper.AnyIPProtocol;
QHostAddress.UnknownNetworkLayerProtocol = QHostAddress_Wrapper.UnknownNetworkLayerProtocol;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHostAddress.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHostAddress.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      