# 🚀 Быстрая справка для работы с агентом

> Краткая версия руководства для быстрого старта

---

## 📂 Основная структура

```
content/              # ✅ РЕДАКТИРУЙ СВОБОДНО - твой контент
quartz.config.ts      # ⚠️  ОСТОРОЖНО - конфигурация сайта
quartz.layout.ts      # ⚠️  ОСТОРОЖНО - макет страниц
quartz/static/        # ✅ ИЗОБРАЖЕНИЯ - обложки и фото
quartz/components/    # ⚠️  ОСТОРОЖНО - кастомные компоненты
quartz/               # 🚫 НЕ ТРОГАЙ - ядро Quartz
node_modules/         # 🚫 НЕ ТРОГАЙ - зависимости
public/               # 🚫 НЕ ТРОГАЙ - генерируется автоматически
```

---

## ⚡ Базовые команды

```bash
# Установка зависимостей
npm ci

# Сборка сайта
npx quartz build

# Локальный сервер
npx quartz serve

# Проверка изменений
git status
git diff

# Коммит и пуш
git add .
git commit -m "описание изменений"
git push
```

---

## 📝 Добавление новой страницы

```markdown
---
title: Название страницы
description: Краткое описание
tags:
  - тег1
  - тег2
---

# Заголовок

Твой контент здесь
```

Сохрани в `content/Папка/Название.md`

---

## 🎨 Обновление изображений

### Фото профиля
```bash
# Замени файл
cp новое-фото.png quartz/static/profilePhoto.png
```

### Обложка главной страницы
```bash
# Светлая тема
cp обложка-светлая.png quartz/static/og-imagelight.png

# Тёмная тема
cp обложка-тёмная.png quartz/static/og-imagedark.png
```

---

## 📊 Добавление галереи

В frontmatter страницы:

```yaml
---
title: Портфолио
portfolioGalleries:
  - title: "Название альбома"
    urls:
      - "https://url-to-photo1.jpg"
      - "https://url-to-photo2.jpg"
---
```

---

## 🔗 Ссылки в Markdown

```markdown
# Внутренние ссылки (Obsidian-стиль)
[[Название страницы]]
[[Папка/Страница]]
[[Страница|Кастомный текст]]

# Внешние ссылки
[Текст ссылки](https://example.com)

# Изображения
![Alt текст](url)
```

---

## 🛡️ Чеклист безопасности

Перед изменениями:
- [ ] Знаю, какие файлы меняю
- [ ] Проверил git status
- [ ] Понимаю, что делаю

После изменений:
- [ ] Просмотрел git diff
- [ ] Собрал проект: npx quartz build
- [ ] Проверил локально: npx quartz serve
- [ ] Закоммитил с понятным сообщением

---

## ⚠️ НИКОГДА не трогай:

- `quartz/` (кроме static/ и кастомных компонентов)
- `node_modules/`
- `public/`
- `.github/workflows/` (если не уверен)
- `package-lock.json`

---

## 🐛 Быстрые решения

### Ошибка сборки
```bash
# Откат изменений
git checkout -- файл

# Переустановка зависимостей
rm -rf node_modules
npm ci
```

### Изменения не видны на сайте
```bash
# Проверь статус деплоя
# https://github.com/ParkPavel/park-pavel/actions

# Очисти кэш браузера
# Ctrl+Shift+R (Windows) или Cmd+Shift+R (Mac)
```

### CustomOgImages ошибка
```typescript
// В quartz.config.ts закомментируй:
// Plugin.CustomOgImages(),
```

---

## 📱 Шаблон запроса для агента

```
Привет! Работаю с проектом park-pavel (Quartz сайт).

Прочитай AGENT_GUIDE.md для контекста.

Задача: [твоя задача]

Требования:
- Минимальные изменения
- Показать diff перед коммитом
- Тест: npx quartz build
- Чёткий commit message

НЕ трогай: quartz/, node_modules/, public/

Приступай!
```

---

## 🎯 Типовые задачи

| Задача | Команда/Файл |
|--------|--------------|
| Новая страница | Создай в `content/` |
| Изменить цвета | `quartz.config.ts` → theme.colors |
| Обновить фото | `quartz/static/profilePhoto.png` |
| Добавить галерею | Frontmatter → portfolioGalleries |
| Изменить макет | `quartz.layout.ts` |

---

## 📚 Полная документация

Подробное руководство: **AGENT_GUIDE.md**

Официальная документация Quartz: https://quartz.jzhao.xyz

---

**💡 Совет:** Всегда сначала читай git diff перед коммитом!
