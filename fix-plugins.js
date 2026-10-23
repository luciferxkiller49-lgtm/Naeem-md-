const fs = require('fs');
const path = require('path');

// YAHAN APNA NUMBER DAALEIN (bina + ke)
const MY_NUMBER = '923XXXXXXXXX'; 

const pluginsDir = path.join(__dirname, 'plugins');

const replacements = {
    'AHMAD TechX': 'Naeem TechX',
    'AHMAD-MD': 'Naeem-MD',
    'QUEEN-MD': 'Naeem-MD',
    'QUEEN🦋': 'Naeem-MD',
    'HASSAN-MD': 'Naeem-MD',
    '923143177636': MY_NUMBER,
    '923218656719': MY_NUMBER
};

console.log('🔍 Plugins folder check kar raha hoon...');

if (!fs.existsSync(pluginsDir)) {
    console.log('❌ Error: "plugins" folder nahi mila! Make sure script bot ke main folder mein hai.');
    process.exit(1);
}

const files = fs.readdirSync(pluginsDir).filter(f => f.endsWith('.js'));
let changedCount = 0;

files.forEach(file => {
    const filePath = path.join(pluginsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    for (const [oldText, newText] of Object.entries(replacements)) {
        // Split aur join use kar rahe hain taake saare matches replace hon
        content = content.split(oldText).join(newText);
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Changed: ${file}`);
        changedCount++;
    }
});

console.log(`\n🎉 Mubarak ho! Total ${changedCount} files update ho gayi hain.`);
