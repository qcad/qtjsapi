
      // auto generated
      //var self;

      // class constructor:
      function QListWidgetItem() {
        

        // should be QListWidgetItem_BaseJs.call(this, engine):
        //QListWidgetItem.prototype = new QListWidgetItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QListWidgetItem_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QListWidgetItem);
            //}
          }
          else {
            qWarning("QListWidgetItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QListWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QListWidgetItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QListWidgetItem);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QListWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QListWidgetItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QListWidgetItem);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QListWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QListWidgetItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QListWidgetItem);
  }

  
  else {
    
        print("QListWidgetItem(): wrong number / type of arguments");
      
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

      //QListWidgetItem.prototype = new QListWidgetItem_BaseJs(engine);
      //QListWidgetItem.prototype = new QListWidgetItem_Wrapper(engine);
      QListWidgetItem.prototype = new Object();

      QListWidgetItem.prototype.toString = function() {
          //return "QListWidgetItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QListWidgetItem [JS]";
        };
      QListWidgetItem.getObjectType = function() {
        
            return RJSType.QListWidgetItem_Type;
          
      };

      QListWidgetItem.prototype.getObjectType = function() {
        
            return RJSType.QListWidgetItem_Type;
          
      };

      QListWidgetItem.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QListWidgetItem_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QListWidgetItem_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: ItemType
QListWidgetItem.Type = QListWidgetItem_Wrapper.Type;
QListWidgetItem.UserType = QListWidgetItem_Wrapper.UserType;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QListWidgetItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QListWidgetItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    