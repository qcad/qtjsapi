
      // auto generated
      //var self;

      // class constructor:
      function QTableWidgetItem() {
        

        // should be QTableWidgetItem_BaseJs.call(this, engine):
        //QTableWidgetItem.prototype = new QTableWidgetItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTableWidgetItem.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTableWidgetItem);
            //}
          }
          else {
            qWarning("QTableWidgetItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QTableWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTableWidgetItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTableWidgetItem);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QTableWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTableWidgetItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTableWidgetItem);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTableWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTableWidgetItem);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTableWidgetItem);
  }

  
  else {
    
        print("QTableWidgetItem(): wrong number / type of arguments");
      
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

      //QTableWidgetItem.prototype = new QTableWidgetItem_BaseJs(engine);
      //QTableWidgetItem.prototype = new QTableWidgetItem_Wrapper(engine);
      QTableWidgetItem.prototype = new Object();

      QTableWidgetItem.prototype.toString = function() {
          //return "QTableWidgetItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTableWidgetItem [JS]";
        };
      QTableWidgetItem.getObjectType = function() {
        return RJSType_QTableWidgetItem.getIdStatic();
      };

      QTableWidgetItem.prototype.getObjectType = function() {
        return RJSType_QTableWidgetItem.getIdStatic();
      };

      QTableWidgetItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTableWidgetItem.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ItemType
QTableWidgetItem.Type = QTableWidgetItem_Wrapper.Type;
QTableWidgetItem.UserType = QTableWidgetItem_Wrapper.UserType;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTableWidgetItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTableWidgetItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    