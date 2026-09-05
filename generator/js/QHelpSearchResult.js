
      // auto generated
      //var self;

      // class constructor:
      function QHelpSearchResult() {
        

        // should be QHelpSearchResult_BaseJs.call(this, engine):
        //QHelpSearchResult.prototype = new QHelpSearchResult_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpSearchResult.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QHelpSearchResult);
                
            //}
          }
          else {
            qWarning("QHelpSearchResult.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new QHelpSearchResult_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QHelpSearchResult);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHelpSearchResult);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QHelpSearchResult_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QHelpSearchResult);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHelpSearchResult);
  }

  
  else {
    
        print("QHelpSearchResult(): wrong number / type of arguments");
      
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

      //QHelpSearchResult.prototype = new QHelpSearchResult_BaseJs(engine);
      //QHelpSearchResult.prototype = new QHelpSearchResult_Wrapper(engine);
      QHelpSearchResult.prototype = new Object();

      QHelpSearchResult.prototype.toString = function() {
          //return "QHelpSearchResult [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpSearchResult [JS]";
        };
      QHelpSearchResult.getObjectType = function() {
        return RJSType_QHelpSearchResult.getIdStatic();
      };

      QHelpSearchResult.prototype.getObjectType = function() {
        return RJSType_QHelpSearchResult.getIdStatic();
      };

      QHelpSearchResult.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpSearchResult.getIdStatic()) {
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
      //QHelpSearchResult.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpSearchResult.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      