import { FunctionComponent } from "react";

const Jebfetch: FunctionComponent = () => {
  return (
    <div className="max-w-sm rounded-lg shadow-2xl lg:ml-10">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>jebfetch</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>🧠 Debian Bookworm</code>
        </pre>
        <pre data-prefix=">" className="text-error">
          <code>🤖 AMD Ryzen 5 2600</code>
        </pre>
        <pre data-prefix=">" className="text-indigo-300">
          <code>🪟 Aqua</code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>🐧 Linux 5.19.15-xanmod</code>
        </pre>
        <pre data-prefix=">" className="text-blue-500">
          <code>🐚 /bin/zsh</code>
        </pre>
        <pre data-prefix=">" className="text-green-400">
          <code>📏 🤯 / 16GB</code>
        </pre>
      </div>
    </div>
  );
};

export default Jebfetch;
