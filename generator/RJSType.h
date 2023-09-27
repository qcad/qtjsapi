
  // Automatically generated, do not edit
  
        #ifndef RJSTYPE_H
        #define RJSTYPE_H
      

    #include <QObject>
    #include <QQmlEngine>

    #include "RJSTypeEnum.h"

    

  
      class RJSType_QGesture : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGesture::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGesture";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGesture();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGesture());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QGestureEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGestureEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGestureEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGestureEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGestureEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QKeyEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QKeyEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QKeyEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QKeyEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QKeyEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QObject : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QObject::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QObject";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QObject();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QObject());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPainterPathStroker : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPainterPathStroker::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPainterPathStroker";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPainterPathStroker();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPainterPathStroker());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QRegularExpressionMatchIterator : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QRegularExpressionMatchIterator::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QRegularExpressionMatchIterator";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QRegularExpressionMatchIterator();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QRegularExpressionMatchIterator());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QVariant : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QVariant::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QVariant";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QVariant();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QVariant());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QWidget());
              }
              return id;
          }


      private:
          static int id;
      };
    

  

  
      class RJSType_QTextLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextLayout());
              }
              return id;
          }


      private:
          static int id;
      };
    

  
      class RJSType_QSurfaceFormat : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSurfaceFormat::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSurfaceFormat";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSurfaceFormat();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSurfaceFormat());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QBitmap : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QBitmap::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QBitmap";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QBitmap();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QBitmap());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QBrush : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QBrush::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QBrush";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QBrush();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QBrush());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QByteArray : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QByteArray::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QByteArray";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QByteArray();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QByteArray());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QColor : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QColor::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QColor";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QColor();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QColor());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QConicalGradient : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QConicalGradient::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QConicalGradient";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QConicalGradient();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QConicalGradient());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QCursor : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QCursor::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QCursor";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QCursor();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QCursor());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDate : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDate::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDate";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDate();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDate());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDateTime : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDateTime::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDateTime";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDateTime();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDateTime());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDesktopServices : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDesktopServices::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDesktopServices";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDesktopServices();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDesktopServices());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDir : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDir::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDir";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDir();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDir());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomAttr : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomAttr::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomAttr";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomAttr();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomAttr());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomCDATASection : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomCDATASection::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomCDATASection";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomCDATASection();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomCDATASection());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomCharacterData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomCharacterData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomCharacterData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomCharacterData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomCharacterData());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomComment : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomComment::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomComment";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomComment();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomComment());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomDocument : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomDocument::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomDocument";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomDocument();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomDocument());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomDocumentFragment : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomDocumentFragment::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomDocumentFragment";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomDocumentFragment();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomDocumentFragment());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomDocumentType : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomDocumentType::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomDocumentType";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomDocumentType();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomDocumentType());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomElement : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomElement::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomElement";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomElement();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomElement());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomEntity());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomEntityReference : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomEntityReference::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomEntityReference";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomEntityReference();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomEntityReference());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomImplementation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomImplementation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomImplementation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomImplementation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomImplementation());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomNamedNodeMap : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomNamedNodeMap::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomNamedNodeMap";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomNamedNodeMap();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomNamedNodeMap());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomNode : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomNode::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomNode";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomNode();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomNode());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomNodeList : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomNodeList::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomNodeList";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomNodeList();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomNodeList());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomNotation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomNotation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomNotation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomNotation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomNotation());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomProcessingInstruction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomProcessingInstruction::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomProcessingInstruction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomProcessingInstruction();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomProcessingInstruction());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDomText : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDomText::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDomText";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDomText();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDomText());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QEventPoint : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QEventPoint::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QEventPoint";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QEventPoint();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QEventPoint());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFileInfo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFileInfo::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFileInfo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFileInfo();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFileInfo());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFont : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFont::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFont";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFont();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFont());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFontDatabase : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFontDatabase::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFontDatabase";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFontDatabase();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFontDatabase());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QGradient : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGradient::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGradient";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGradient();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGradient());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QIcon : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QIcon::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QIcon";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QIcon();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QIcon());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QImage : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QImage::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QImage";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QImage();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QImage());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QItemSelection : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QItemSelection::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QItemSelection";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QItemSelection();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QItemSelection());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QKeyCombination : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QKeyCombination::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QKeyCombination";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QKeyCombination();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QKeyCombination());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QKeySequence : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QKeySequence::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QKeySequence";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QKeySequence();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QKeySequence());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QLine : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QLine::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QLine";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QLine();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QLine());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QLineF : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QLineF::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QLineF";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QLineF();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QLineF());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QLinearGradient : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QLinearGradient::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QLinearGradient";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QLinearGradient();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QLinearGradient());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QLocale : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QLocale::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QLocale";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QLocale();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QLocale());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QEasingCurve : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QEasingCurve::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QEasingCurve";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QEasingCurve();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QEasingCurve());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QMargins : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QMargins::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QMargins";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QMargins();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QMargins());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QMarginsF : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QMarginsF::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QMarginsF";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QMarginsF();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QMarginsF());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QModelIndex : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QModelIndex::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QModelIndex";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QModelIndex();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QModelIndex());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPageLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPageLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPageLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPageLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPageLayout());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPageRanges : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPageRanges::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPageRanges";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPageRanges();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPageRanges());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPageSize : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPageSize::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPageSize";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPageSize();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPageSize());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPainterPath : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPainterPath::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPainterPath";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPainterPath();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPainterPath());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPalette : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPalette::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPalette";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPalette();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPalette());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPen : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPen::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPen";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPen();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPen());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPicture : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPicture::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPicture";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPicture();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPicture());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPixmap : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPixmap::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPixmap";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPixmap();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPixmap());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPoint : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPoint::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPoint";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPoint();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPoint());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPointF : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPointF::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPointF";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPointF();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPointF());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPolygon : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPolygon::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPolygon";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPolygon();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPolygon());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPolygonF : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPolygonF::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPolygonF";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPolygonF();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPolygonF());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPrinterInfo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPrinterInfo::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPrinterInfo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPrinterInfo();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPrinterInfo());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QProcessEnvironment : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QProcessEnvironment::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QProcessEnvironment";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QProcessEnvironment();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QProcessEnvironment());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QRadialGradient : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QRadialGradient::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QRadialGradient";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QRadialGradient();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QRadialGradient());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QRect : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QRect::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QRect";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QRect();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QRect());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QRectF : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QRectF::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QRectF";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QRectF();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QRectF());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QRegion : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QRegion::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QRegion";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QRegion();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QRegion());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QRegularExpression : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QRegularExpression::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QRegularExpression";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QRegularExpression();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QRegularExpression());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QRegularExpressionMatch : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QRegularExpressionMatch::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QRegularExpressionMatch";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QRegularExpressionMatch();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QRegularExpressionMatch());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSize : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSize::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSize";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSize();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSize());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSizeF : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSizeF::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSizeF";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSizeF();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSizeF());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSizePolicy : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSizePolicy::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSizePolicy";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSizePolicy();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSizePolicy());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextBlockFormat : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextBlockFormat::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextBlockFormat";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextBlockFormat();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextBlockFormat());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextCharFormat : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextCharFormat::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextCharFormat";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextCharFormat();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextCharFormat());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextCursor : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextCursor::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextCursor";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextCursor();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextCursor());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextFormat : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextFormat::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextFormat";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextFormat();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextFormat());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextFrameFormat : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextFrameFormat::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextFrameFormat";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextFrameFormat();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextFrameFormat());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextImageFormat : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextImageFormat::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextImageFormat";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextImageFormat();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextImageFormat());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextLength : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextLength::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextLength";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextLength();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextLength());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextListFormat : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextListFormat::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextListFormat";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextListFormat();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextListFormat());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextTableCellFormat : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextTableCellFormat::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextTableCellFormat";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextTableCellFormat();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextTableCellFormat());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextTableFormat : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextTableFormat::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextTableFormat";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextTableFormat();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextTableFormat());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTime : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTime::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTime";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTime();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTime());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTransform : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTransform::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTransform";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTransform();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTransform());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QUrl : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QUrl::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QUrl";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QUrl();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QUrl());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QUrlQuery : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QUrlQuery::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QUrlQuery";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QUrlQuery();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QUrlQuery());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlAttributes : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlAttributes::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlAttributes";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlAttributes();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlAttributes());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlStreamAttributes : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlStreamAttributes::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlStreamAttributes";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlStreamAttributes();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlStreamAttributes());
              }
              return id;
          }


      private:
          static int id;
      };
    

  
      class RJSType_QAbstractFileIconProvider : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAbstractFileIconProvider::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAbstractFileIconProvider";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAbstractFileIconProvider();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAbstractFileIconProvider());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QAbstractListModel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAbstractListModel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAbstractListModel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAbstractListModel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAbstractListModel());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QAbstractTableModel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAbstractTableModel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAbstractTableModel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAbstractTableModel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAbstractTableModel());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QCompleter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QCompleter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QCompleter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QCompleter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QCompleter());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QContextMenuEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QContextMenuEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QContextMenuEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QContextMenuEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QContextMenuEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDirIterator : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDirIterator::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDirIterator";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDirIterator();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDirIterator());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDragEnterEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDragEnterEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDragEnterEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDragEnterEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDragEnterEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QActionEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QActionEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QActionEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QActionEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QActionEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDragLeaveEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDragLeaveEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDragLeaveEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDragLeaveEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDragLeaveEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDragMoveEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDragMoveEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDragMoveEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDragMoveEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDragMoveEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDropEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDropEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDropEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDropEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDropEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFileIconProvider : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFileIconProvider::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFileIconProvider";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFileIconProvider();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFileIconProvider());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFontMetrics : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFontMetrics::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFontMetrics";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFontMetrics();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFontMetrics());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFontMetricsF : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFontMetricsF::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFontMetricsF";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFontMetricsF();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFontMetricsF());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QHelpEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QHelpEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QHelpEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QHelpEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QHelpEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QIODeviceBase : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QIODeviceBase::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QIODeviceBase";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QIODeviceBase();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QIODeviceBase());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QImageReader : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QImageReader::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QImageReader";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QImageReader();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QImageReader());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QImageWriter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QImageWriter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QImageWriter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QImageWriter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QImageWriter());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QInputEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QInputEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QInputEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QInputEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QInputEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QLayoutItem : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QLayoutItem::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QLayoutItem";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QLayoutItem();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QLayoutItem());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QListWidgetItem : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QListWidgetItem::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QListWidgetItem";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QListWidgetItem();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QListWidgetItem());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QMouseEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QMouseEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QMouseEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QMouseEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QMouseEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPagedPaintDevice : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPagedPaintDevice::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPagedPaintDevice";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPagedPaintDevice();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPagedPaintDevice());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPaintDevice : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPaintDevice::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPaintDevice";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPaintDevice();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPaintDevice());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPaintEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPaintEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPaintEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPaintEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPaintEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPainter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPainter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPainter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPainter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPainter());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPanGesture : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPanGesture::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPanGesture";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPanGesture();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPanGesture());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPinchGesture : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPinchGesture::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPinchGesture";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPinchGesture();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPinchGesture());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPointerEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPointerEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPointerEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPointerEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPointerEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPrinter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPrinter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPrinter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPrinter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPrinter());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QProcess : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QProcess::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QProcess";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QProcess();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QProcess());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QResizeEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QResizeEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QResizeEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QResizeEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QResizeEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSinglePointEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSinglePointEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSinglePointEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSinglePointEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSinglePointEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSpacerItem : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSpacerItem::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSpacerItem";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSpacerItem();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSpacerItem());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QStandardItem : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QStandardItem::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QStandardItem";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QStandardItem();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QStandardItem());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QStringConverter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QStringConverter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QStringConverter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QStringConverter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QStringConverter());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QStringDecoder : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QStringDecoder::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QStringDecoder";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QStringDecoder();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QStringDecoder());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QStringEncoder : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QStringEncoder::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QStringEncoder";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QStringEncoder();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QStringEncoder());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSwipeGesture : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSwipeGesture::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSwipeGesture";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSwipeGesture();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSwipeGesture());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTableWidgetItem : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTableWidgetItem::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTableWidgetItem";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTableWidgetItem();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTableWidgetItem());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextStream : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextStream::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextStream";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextStream();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextStream());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QToolTip : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QToolTip::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QToolTip";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QToolTip();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QToolTip());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTreeWidgetItem : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTreeWidgetItem::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTreeWidgetItem";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTreeWidgetItem();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTreeWidgetItem());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QUiLoader : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QUiLoader::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QUiLoader";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QUiLoader();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QUiLoader());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QWheelEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QWheelEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QWheelEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QWheelEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QWheelEvent());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QWidgetItem : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QWidgetItem::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QWidgetItem";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QWidgetItem();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QWidgetItem());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlContentHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlContentHandler::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlContentHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlContentHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlContentHandler());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlDTDHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlDTDHandler::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlDTDHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlDTDHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlDTDHandler());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlDeclHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlDeclHandler::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlDeclHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlDeclHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlDeclHandler());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlDefaultHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlDefaultHandler::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlDefaultHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlDefaultHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlDefaultHandler());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlEntityResolver : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlEntityResolver::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlEntityResolver";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlEntityResolver();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlEntityResolver());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlErrorHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlErrorHandler::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlErrorHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlErrorHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlErrorHandler());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlInputSource : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlInputSource::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlInputSource";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlInputSource();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlInputSource());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlLexicalHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlLexicalHandler::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlLexicalHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlLexicalHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlLexicalHandler());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlLocator : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlLocator::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlLocator";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlLocator();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlLocator());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlParseException : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlParseException::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlParseException";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlParseException();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlParseException());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlReader : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlReader::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlReader";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlReader();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlReader());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlSimpleReader : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlSimpleReader::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlSimpleReader";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlSimpleReader();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlSimpleReader());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlStreamAttribute : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlStreamAttribute::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlStreamAttribute";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlStreamAttribute();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlStreamAttribute());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlStreamReader : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlStreamReader::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlStreamReader";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlStreamReader();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlStreamReader());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QXmlStreamWriter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QXmlStreamWriter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QXmlStreamWriter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QXmlStreamWriter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QXmlStreamWriter());
              }
              return id;
          }


      private:
          static int id;
      };
    

  
      class RJSType_QGraphicsEffect : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGraphicsEffect::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGraphicsEffect";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGraphicsEffect();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGraphicsEffect());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QGraphicsBlurEffect : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGraphicsBlurEffect::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGraphicsBlurEffect";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGraphicsBlurEffect();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGraphicsBlurEffect());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QGraphicsDropShadowEffect : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGraphicsDropShadowEffect::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGraphicsDropShadowEffect";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGraphicsDropShadowEffect();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGraphicsDropShadowEffect());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QGraphicsColorizeEffect : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGraphicsColorizeEffect::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGraphicsColorizeEffect";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGraphicsColorizeEffect();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGraphicsColorizeEffect());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QGraphicsOpacityEffect : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGraphicsOpacityEffect::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGraphicsOpacityEffect";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGraphicsOpacityEffect();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGraphicsOpacityEffect());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QQuickWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QQuickWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QQuickWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QQuickWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QQuickWidget());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSvgRenderer : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSvgRenderer::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSvgRenderer";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSvgRenderer();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSvgRenderer());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QAbstractButton : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAbstractButton::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAbstractButton";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAbstractButton();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAbstractButton());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QAbstractItemDelegate : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAbstractItemDelegate::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAbstractItemDelegate";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAbstractItemDelegate();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAbstractItemDelegate());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QAbstractItemModel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAbstractItemModel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAbstractItemModel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAbstractItemModel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAbstractItemModel());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QAbstractItemView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAbstractItemView::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAbstractItemView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAbstractItemView();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAbstractItemView());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QAbstractPrintDialog : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAbstractPrintDialog::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAbstractPrintDialog";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAbstractPrintDialog();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAbstractPrintDialog());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QAbstractScrollArea : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAbstractScrollArea::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAbstractScrollArea";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAbstractScrollArea();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAbstractScrollArea());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QAbstractSlider : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAbstractSlider::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAbstractSlider";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAbstractSlider();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAbstractSlider());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QAction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QAction::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QAction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QAction();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QAction());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QActionGroup : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QActionGroup::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QActionGroup";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QActionGroup();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QActionGroup());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QApplication : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QApplication::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QApplication";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QApplication();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QApplication());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QBoxLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QBoxLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QBoxLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QBoxLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QBoxLayout());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QBuffer : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QBuffer::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QBuffer";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QBuffer();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QBuffer());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QButtonGroup : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QButtonGroup::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QButtonGroup";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QButtonGroup();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QButtonGroup());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QCheckBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QCheckBox::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QCheckBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QCheckBox();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QCheckBox());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QClipboard : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QClipboard::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QClipboard";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QClipboard();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QClipboard());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QComboBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QComboBox::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QComboBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QComboBox();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QComboBox());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QCoreApplication : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QCoreApplication::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QCoreApplication";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QCoreApplication();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QCoreApplication());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDialog : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDialog::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDialog";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDialog();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDialog());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDialogButtonBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDialogButtonBox::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDialogButtonBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDialogButtonBox();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDialogButtonBox());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDockWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDockWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDockWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDockWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDockWidget());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDoubleSpinBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDoubleSpinBox::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDoubleSpinBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDoubleSpinBox();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDoubleSpinBox());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDoubleValidator : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDoubleValidator::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDoubleValidator";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDoubleValidator();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDoubleValidator());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QDrag : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QDrag::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QDrag";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QDrag();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QDrag());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QEventLoop : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QEventLoop::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QEventLoop";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QEventLoop();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QEventLoop());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFile : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFile::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFile";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFile();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFile());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFileDevice : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFileDevice::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFileDevice";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFileDevice();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFileDevice());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFileDialog : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFileDialog::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFileDialog";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFileDialog();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFileDialog());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFileSystemModel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFileSystemModel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFileSystemModel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFileSystemModel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFileSystemModel());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFontComboBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFontComboBox::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFontComboBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFontComboBox();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFontComboBox());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFormLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFormLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFormLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFormLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFormLayout());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFrame : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFrame::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFrame";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFrame();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFrame());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QGridLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGridLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGridLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGridLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGridLayout());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QGroupBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGroupBox::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGroupBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGroupBox();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGroupBox());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QGuiApplication : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGuiApplication::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGuiApplication";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGuiApplication();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGuiApplication());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QHBoxLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QHBoxLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QHBoxLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QHBoxLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QHBoxLayout());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QHeaderView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QHeaderView::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QHeaderView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QHeaderView();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QHeaderView());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QIODevice : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QIODevice::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QIODevice";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QIODevice();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QIODevice());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QInputDevice : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QInputDevice::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QInputDevice";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QInputDevice();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QInputDevice());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QIntValidator : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QIntValidator::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QIntValidator";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QIntValidator();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QIntValidator());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QItemDelegate : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QItemDelegate::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QItemDelegate";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QItemDelegate();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QItemDelegate());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QItemSelectionModel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QItemSelectionModel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QItemSelectionModel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QItemSelectionModel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QItemSelectionModel());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QLabel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QLabel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QLabel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QLabel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QLabel());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QLayout());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QLineEdit : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QLineEdit::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QLineEdit";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QLineEdit();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QLineEdit());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QListView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QListView::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QListView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QListView();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QListView());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QListWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QListWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QListWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QListWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QListWidget());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QMainWindow : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QMainWindow::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QMainWindow";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QMainWindow();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QMainWindow());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QMdiArea : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QMdiArea::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QMdiArea";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QMdiArea();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QMdiArea());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QMdiSubWindow : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QMdiSubWindow::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QMdiSubWindow";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QMdiSubWindow();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QMdiSubWindow());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QMenu : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QMenu::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QMenu";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QMenu();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QMenu());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QMenuBar : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QMenuBar::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QMenuBar";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QMenuBar();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QMenuBar());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QMessageBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QMessageBox::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QMessageBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QMessageBox();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QMessageBox());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QMimeData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QMimeData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QMimeData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QMimeData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QMimeData());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPlainTextEdit : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPlainTextEdit::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPlainTextEdit";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPlainTextEdit();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPlainTextEdit());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPrintDialog : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPrintDialog::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPrintDialog";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPrintDialog();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPrintDialog());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QProgressBar : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QProgressBar::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QProgressBar";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QProgressBar();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QProgressBar());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QProgressDialog : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QProgressDialog::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QProgressDialog";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QProgressDialog();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QProgressDialog());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPushButton : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPushButton::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPushButton";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPushButton();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPushButton());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QRadioButton : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QRadioButton::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QRadioButton";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QRadioButton();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QRadioButton());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QRegularExpressionValidator : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QRegularExpressionValidator::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QRegularExpressionValidator";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QRegularExpressionValidator();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QRegularExpressionValidator());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QScreen : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QScreen::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QScreen";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QScreen();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QScreen());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QScrollArea : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QScrollArea::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QScrollArea";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QScrollArea();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QScrollArea());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QScrollBar : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QScrollBar::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QScrollBar";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QScrollBar();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QScrollBar());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSettings : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSettings::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSettings";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSettings();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSettings());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QShortcut : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QShortcut::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QShortcut";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QShortcut();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QShortcut());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSlider : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSlider::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSlider";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSlider();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSlider());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSortFilterProxyModel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSortFilterProxyModel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSortFilterProxyModel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSortFilterProxyModel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSortFilterProxyModel());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSpinBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSpinBox::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSpinBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSpinBox();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSpinBox());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSplashScreen : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSplashScreen::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSplashScreen";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSplashScreen();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSplashScreen());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSplitter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSplitter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSplitter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSplitter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSplitter());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QSplitterHandle : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QSplitterHandle::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QSplitterHandle";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QSplitterHandle();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QSplitterHandle());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QStackedLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QStackedLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QStackedLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QStackedLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QStackedLayout());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QStackedWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QStackedWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QStackedWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QStackedWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QStackedWidget());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QStandardItemModel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QStandardItemModel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QStandardItemModel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QStandardItemModel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QStandardItemModel());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QStatusBar : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QStatusBar::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QStatusBar";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QStatusBar();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QStatusBar());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTabBar : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTabBar::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTabBar";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTabBar();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTabBar());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTabWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTabWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTabWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTabWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTabWidget());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTableView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTableView::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTableView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTableView();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTableView());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTableWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTableWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTableWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTableWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTableWidget());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextBrowser : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextBrowser::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextBrowser";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextBrowser();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextBrowser());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextDocument : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextDocument::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextDocument";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextDocument();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextDocument());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTextEdit : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTextEdit::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTextEdit";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTextEdit();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTextEdit());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTimer : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTimer::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTimer";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTimer();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTimer());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QToolBar : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QToolBar::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QToolBar";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QToolBar();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QToolBar());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QToolButton : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QToolButton::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QToolButton";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QToolButton();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QToolButton());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTranslator : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTranslator::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTranslator";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTranslator();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTranslator());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTreeView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTreeView::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTreeView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTreeView();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTreeView());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTreeWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTreeWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTreeWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTreeWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTreeWidget());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QVBoxLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QVBoxLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QVBoxLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QVBoxLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QVBoxLayout());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QValidator : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QValidator::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QValidator";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QValidator();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QValidator());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QWidgetAction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QWidgetAction::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QWidgetAction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QWidgetAction();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QWidgetAction());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QWindow : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QWindow::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QWindow";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QWindow();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QWindow());
              }
              return id;
          }


      private:
          static int id;
      };
    

  

  

  

  

  

  
      class RJSType_QCalendar : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QCalendar::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QCalendar";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QCalendar();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QCalendar());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QFontInfo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QFontInfo::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QFontInfo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QFontInfo();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QFontInfo());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QTimeZone : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QTimeZone::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QTimeZone";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QTimeZone();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QTimeZone());
              }
              return id;
          }


      private:
          static int id;
      };
    

  
      class RJSType_QGraphicsProxyWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QGraphicsProxyWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QGraphicsProxyWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QGraphicsProxyWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QGraphicsProxyWidget());
              }
              return id;
          }


      private:
          static int id;
      };
    
      class RJSType_QPaintEngine : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_QPaintEngine::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "QPaintEngine";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_QPaintEngine();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_QPaintEngine());
              }
              return id;
          }


      private:
          static int id;
      };
    


    #endif
  