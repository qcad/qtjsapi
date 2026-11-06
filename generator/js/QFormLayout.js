
      // auto generated
      //var self;

      // class constructor:
      function QFormLayout() {
        

        // should be QFormLayout_BaseJs.call(this, engine):
        //QFormLayout.prototype = new QFormLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFormLayout.getIdStatic()))) {

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
            qWarning("QFormLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QFormLayout.js: No constructor found for class QFormLayout");
            
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

      //QFormLayout.prototype = new QFormLayout_BaseJs(engine);
      //QFormLayout.prototype = new QFormLayout_Wrapper(engine);
      QFormLayout.prototype = new Object();


      QFormLayout.prototype.toString = function() {
          //return "QFormLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFormLayout [JS]";
        };
      QFormLayout.getObjectType = function() {
        return RJSType_QFormLayout.getIdStatic();
      };

      QFormLayout.prototype.getObjectType = function() {
        return RJSType_QFormLayout.getIdStatic();
      };

      QFormLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFormLayout.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayout.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: FieldGrowthPolicy
QFormLayout.FieldsStayAtSizeHint = QFormLayout_Wrapper.FieldsStayAtSizeHint;
QFormLayout.ExpandingFieldsGrow = QFormLayout_Wrapper.ExpandingFieldsGrow;
QFormLayout.AllNonFixedFieldsGrow = QFormLayout_Wrapper.AllNonFixedFieldsGrow;

  // enum: RowWrapPolicy
QFormLayout.DontWrapRows = QFormLayout_Wrapper.DontWrapRows;
QFormLayout.WrapLongRows = QFormLayout_Wrapper.WrapLongRows;
QFormLayout.WrapAllRows = QFormLayout_Wrapper.WrapAllRows;

  // enum: ItemRole
QFormLayout.LabelRole = QFormLayout_Wrapper.LabelRole;
QFormLayout.FieldRole = QFormLayout_Wrapper.FieldRole;
QFormLayout.SpanningRole = QFormLayout_Wrapper.SpanningRole;


      // functions:
      
        // function 
        QFormLayout.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QFormLayout.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QFormLayout.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QFormLayout.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QFormLayout.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QFormLayout.prototype.findChild = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QFormLayout.prototype.children = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setParent = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QFormLayout.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QFormLayout.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QFormLayout.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QFormLayout.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QFormLayout.prototype.property = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QFormLayout.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QFormLayout.prototype.parent = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QFormLayout.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QFormLayout.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QFormLayout.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setSizeConstraint = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setSizeConstraint");
          
              return this.__PROXY__.setSizeConstraint(...args);
            
        };
    
        // function 
        QFormLayout.prototype.sizeConstraint = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.sizeConstraint");
          
              return this.__PROXY__.sizeConstraint(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setMenuBar = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setMenuBar");
          
              return this.__PROXY__.setMenuBar(...args);
            
        };
    
        // function 
        QFormLayout.prototype.menuBar = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.menuBar");
          
              return this.__PROXY__.menuBar(...args);
            
        };
    
        // function 
        QFormLayout.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QFormLayout.prototype.geometry = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
    
        // function 
        QFormLayout.prototype.activate = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.activate");
          
              return this.__PROXY__.activate(...args);
            
        };
    
        // function 
        QFormLayout.prototype.update = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QFormLayout.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
    
        // function 
        QFormLayout.prototype.removeWidget = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.removeWidget");
          
              return this.__PROXY__.removeWidget(...args);
            
        };
    
        // function 
        QFormLayout.prototype.removeItem = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
    
        // function 
        QFormLayout.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
    
        // function 
        QFormLayout.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
    
        // function 
        QFormLayout.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QFormLayout.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
    
        // function 
        QFormLayout.prototype.totalHeightForWidth = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.totalHeightForWidth");
          
              return this.__PROXY__.totalHeightForWidth(...args);
            
        };
    
        // function 
        QFormLayout.prototype.totalMinimumSize = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.totalMinimumSize");
          
              return this.__PROXY__.totalMinimumSize(...args);
            
        };
    
        // function 
        QFormLayout.prototype.totalMaximumSize = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.totalMaximumSize");
          
              return this.__PROXY__.totalMaximumSize(...args);
            
        };
    
        // function 
        QFormLayout.prototype.totalSizeHint = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.totalSizeHint");
          
              return this.__PROXY__.totalSizeHint(...args);
            
        };
    
        // function 
        QFormLayout.prototype.layout = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QFormLayout.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QFormLayout.prototype.widgetEvent = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.widgetEvent");
          
              return this.__PROXY__.widgetEvent(...args);
            
        };
    
        // function 
        QFormLayout.prototype.childEvent = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.childEvent");
          
              return this.__PROXY__.childEvent(...args);
            
        };
    
        // function 
        QFormLayout.prototype.addChildLayout = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.addChildLayout");
          
              return this.__PROXY__.addChildLayout(...args);
            
        };
    
        // function 
        QFormLayout.prototype.addChildWidget = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.addChildWidget");
          
              return this.__PROXY__.addChildWidget(...args);
            
        };
    
        // function 
        QFormLayout.prototype.adoptLayout = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.adoptLayout");
          
              return this.__PROXY__.adoptLayout(...args);
            
        };
    
        // function 
        QFormLayout.prototype.alignmentRect = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.alignmentRect");
          
              return this.__PROXY__.alignmentRect(...args);
            
        };
    
        // function 
        QFormLayout.prototype.Q_DECLARE_PRIVATE = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.Q_DECLARE_PRIVATE");
          
              return this.__PROXY__.Q_DECLARE_PRIVATE(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setFieldGrowthPolicy = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setFieldGrowthPolicy");
          
              return this.__PROXY__.setFieldGrowthPolicy(...args);
            
        };
    
        // function 
        QFormLayout.prototype.fieldGrowthPolicy = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.fieldGrowthPolicy");
          
              return this.__PROXY__.fieldGrowthPolicy(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setRowWrapPolicy = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setRowWrapPolicy");
          
              return this.__PROXY__.setRowWrapPolicy(...args);
            
        };
    
        // function 
        QFormLayout.prototype.rowWrapPolicy = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.rowWrapPolicy");
          
              return this.__PROXY__.rowWrapPolicy(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setLabelAlignment = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setLabelAlignment");
          
              return this.__PROXY__.setLabelAlignment(...args);
            
        };
    
        // function 
        QFormLayout.prototype.labelAlignment = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.labelAlignment");
          
              return this.__PROXY__.labelAlignment(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setFormAlignment = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setFormAlignment");
          
              return this.__PROXY__.setFormAlignment(...args);
            
        };
    
        // function 
        QFormLayout.prototype.formAlignment = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.formAlignment");
          
              return this.__PROXY__.formAlignment(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setHorizontalSpacing = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setHorizontalSpacing");
          
              return this.__PROXY__.setHorizontalSpacing(...args);
            
        };
    
        // function 
        QFormLayout.prototype.horizontalSpacing = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.horizontalSpacing");
          
              return this.__PROXY__.horizontalSpacing(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setVerticalSpacing = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setVerticalSpacing");
          
              return this.__PROXY__.setVerticalSpacing(...args);
            
        };
    
        // function 
        QFormLayout.prototype.verticalSpacing = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.verticalSpacing");
          
              return this.__PROXY__.verticalSpacing(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
    
        // function 
        QFormLayout.prototype.addRow = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.addRow");
          
              return this.__PROXY__.addRow(...args);
            
        };
    
        // function 
        QFormLayout.prototype.insertRow = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
    
        // function 
        QFormLayout.prototype.removeRow = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setItem = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setItem");
          
              return this.__PROXY__.setItem(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setWidget = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setWidget");
          
              return this.__PROXY__.setWidget(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QFormLayout.prototype.itemAt = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
    
        // function 
        QFormLayout.prototype.labelForField = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.labelForField");
          
              return this.__PROXY__.labelForField(...args);
            
        };
    
        // function 
        QFormLayout.prototype.addItem = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
    
        // function 
        QFormLayout.prototype.takeAt = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.takeAt");
          
              return this.__PROXY__.takeAt(...args);
            
        };
    
        // function 
        QFormLayout.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QFormLayout.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
    
        // function 
        QFormLayout.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
    
        // function 
        QFormLayout.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
    
        // function 
        QFormLayout.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QFormLayout.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QFormLayout.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
    
        // function 
        QFormLayout.prototype.count = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
    
        // function 
        QFormLayout.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
    
        // function 
        QFormLayout.prototype.resetFieldGrowthPolicy = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.resetFieldGrowthPolicy");
          
              return this.__PROXY__.resetFieldGrowthPolicy(...args);
            
        };
    
        // function 
        QFormLayout.prototype.resetRowWrapPolicy = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.resetRowWrapPolicy");
          
              return this.__PROXY__.resetRowWrapPolicy(...args);
            
        };
    
        // function 
        QFormLayout.prototype.resetLabelAlignment = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.resetLabelAlignment");
          
              return this.__PROXY__.resetLabelAlignment(...args);
            
        };
    
        // function 
        QFormLayout.prototype.resetFormAlignment = function(...args) 
          
        {
          //print("JS: QFormLayout.prototype.resetFormAlignment");
          
              return this.__PROXY__.resetFormAlignment(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QFormLayout.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFormLayout.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QFormLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QFormLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QFormLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFormLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFormLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFormLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      