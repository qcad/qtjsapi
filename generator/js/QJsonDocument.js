
      // auto generated
      //var self;

      // class constructor:
      function QJsonDocument() {
        

        // should be QJsonDocument_BaseJs.call(this, engine):
        //QJsonDocument.prototype = new QJsonDocument_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QJsonDocument.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("QJsonDocument.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QJsonDocument_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QJsonDocument);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QJsonDocument_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QJsonDocument);
  }

  
  else {
    
        print("QJsonDocument(): wrong number / type of arguments");
      
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

      //QJsonDocument.prototype = new QJsonDocument_BaseJs(engine);
      //QJsonDocument.prototype = new QJsonDocument_Wrapper(engine);
      QJsonDocument.prototype = new Object();


      QJsonDocument.prototype.toString = function() {
          //return "QJsonDocument [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QJsonDocument [JS]";
        };
      QJsonDocument.getObjectType = function() {
        return RJSType_QJsonDocument.getIdStatic();
      };

      QJsonDocument.prototype.getObjectType = function() {
        return RJSType_QJsonDocument.getIdStatic();
      };

      QJsonDocument.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QJsonDocument.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: JsonFormat
QJsonDocument.Indented = QJsonDocument_Wrapper.Indented;
QJsonDocument.Compact = QJsonDocument_Wrapper.Compact;


      // functions:
      
        // function 
        QJsonDocument.prototype.fromVariant = function(...args) 
          
        {
          //print("JS: QJsonDocument.prototype.fromVariant");
          
              return this.__PROXY__.fromVariant(...args);
            
        };
        
        // function 
        QJsonDocument.prototype.toVariant = function(...args) 
          
        {
          //print("JS: QJsonDocument.prototype.toVariant");
          
              return this.__PROXY__.toVariant(...args);
            
        };
        
        // function 
        QJsonDocument.prototype.fromJson = function(...args) 
          
        {
          //print("JS: QJsonDocument.prototype.fromJson");
          
              return this.__PROXY__.fromJson(...args);
            
        };
        
        // function 
        QJsonDocument.prototype.toJson = function(...args) 
          
        {
          //print("JS: QJsonDocument.prototype.toJson");
          
              return this.__PROXY__.toJson(...args);
            
        };
        
        // function 
        QJsonDocument.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QJsonDocument.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QJsonDocument.prototype.isArray = function(...args) 
          
        {
          //print("JS: QJsonDocument.prototype.isArray");
          
              return this.__PROXY__.isArray(...args);
            
        };
        
        // function 
        QJsonDocument.prototype.isObject = function(...args) 
          
        {
          //print("JS: QJsonDocument.prototype.isObject");
          
              return this.__PROXY__.isObject(...args);
            
        };
        
        // function 
        QJsonDocument.prototype.isNull = function(...args) 
          
        {
          //print("JS: QJsonDocument.prototype.isNull");
          
              return this.__PROXY__.isNull(...args);
            
        };
        

      // static functions:
      

        // static function 
        QJsonDocument.fromVariant = function() 
          
        {
          //print("JS: QJsonDocument.fromVariant");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QJsonDocument_WrapperSingletonInstance.fromVariant(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QJsonDocument);
  }

  
  else {
    
        print("QJsonDocument.fromVariant(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QJsonDocument.fromJson = function() 
          
        {
          //print("JS: QJsonDocument.fromJson");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QJsonDocument_WrapperSingletonInstance.fromJson(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QJsonDocument);
  }

  
  else {
    
        print("QJsonDocument.fromJson(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      QJsonDocument.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QJsonDocument.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QJsonDocument.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QJsonDocument.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QJsonDocument.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QJsonDocument.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      