
      // auto generated
      //var self;

      // class constructor:
      function QDomCDATASection() {
        

        // should be QDomCDATASection_BaseJs.call(this, engine):
        //QDomCDATASection.prototype = new QDomCDATASection_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QDomCDATASection_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDomCDATASection);
            //}
          }
          else {
            qWarning("QDomCDATASection.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomCDATASection_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomCDATASection);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomCDATASection);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomCDATASection_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDomCDATASection);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomCDATASection);
  }

  
  else {
    
        print("QDomCDATASection(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //QDomCDATASection.prototype = new QDomCDATASection_BaseJs(engine);
      //QDomCDATASection.prototype = new QDomCDATASection_Wrapper(engine);
      QDomCDATASection.prototype = new Object();

      QDomCDATASection.prototype.toString = function() {
          //return "QDomCDATASection [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomCDATASection [JS]";
        };
      QDomCDATASection.getObjectType = function() {
        
            return RJSType.QDomCDATASection_Type;
          
      };

      QDomCDATASection.prototype.getObjectType = function() {
        
            return RJSType.QDomCDATASection_Type;
          
      };

      QDomCDATASection.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QDomCDATASection_Type:
              return true;
          
        case RJSType.QDomText_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QDomCDATASection_Type, 
          
            RJSType.QDomText_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomCDATASection.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomCDATASection.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    