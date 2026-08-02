
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionHeaderV2() {
        

        // should be QStyleOptionHeaderV2_BaseJs.call(this, engine):
        //QStyleOptionHeaderV2.prototype = new QStyleOptionHeaderV2_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionHeaderV2.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionHeaderV2);
                
            //}
          }
          else {
            qWarning("QStyleOptionHeaderV2.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionHeaderV2_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionHeaderV2);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionHeaderV2);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionHeaderV2_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionHeaderV2);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionHeaderV2);
  }

  
  else {
    
        print("QStyleOptionHeaderV2(): wrong number / type of arguments");
      
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

      //QStyleOptionHeaderV2.prototype = new QStyleOptionHeaderV2_BaseJs(engine);
      //QStyleOptionHeaderV2.prototype = new QStyleOptionHeaderV2_Wrapper(engine);
      QStyleOptionHeaderV2.prototype = new Object();

      QStyleOptionHeaderV2.prototype.toString = function() {
          //return "QStyleOptionHeaderV2 [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionHeaderV2 [JS]";
        };
      QStyleOptionHeaderV2.getObjectType = function() {
        return RJSType_QStyleOptionHeaderV2.getIdStatic();
      };

      QStyleOptionHeaderV2.prototype.getObjectType = function() {
        return RJSType_QStyleOptionHeaderV2.getIdStatic();
      };

      QStyleOptionHeaderV2.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionHeaderV2.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOptionHeader.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SectionPosition
QStyleOptionHeaderV2.Beginning = QStyleOptionHeaderV2_Wrapper.Beginning;
QStyleOptionHeaderV2.Middle = QStyleOptionHeaderV2_Wrapper.Middle;
QStyleOptionHeaderV2.End = QStyleOptionHeaderV2_Wrapper.End;
QStyleOptionHeaderV2.OnlyOneSection = QStyleOptionHeaderV2_Wrapper.OnlyOneSection;

  // enum: SelectedPosition
QStyleOptionHeaderV2.NotAdjacent = QStyleOptionHeaderV2_Wrapper.NotAdjacent;
QStyleOptionHeaderV2.NextIsSelected = QStyleOptionHeaderV2_Wrapper.NextIsSelected;
QStyleOptionHeaderV2.PreviousIsSelected = QStyleOptionHeaderV2_Wrapper.PreviousIsSelected;
QStyleOptionHeaderV2.NextAndPreviousAreSelected = QStyleOptionHeaderV2_Wrapper.NextAndPreviousAreSelected;

  // enum: SortIndicator
QStyleOptionHeaderV2.None = QStyleOptionHeaderV2_Wrapper.None;
QStyleOptionHeaderV2.SortUp = QStyleOptionHeaderV2_Wrapper.SortUp;
QStyleOptionHeaderV2.SortDown = QStyleOptionHeaderV2_Wrapper.SortDown;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionHeaderV2.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionHeaderV2.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      